const SubCategory = require("../../models/SubCategory");
const requestParams = require("../categories/categorySchema");

const add = async (req,res) => {
  try{
    let data = req.body;
    await requestParams.sub_category.validate(data);

    const subCategory = await SubCategory.query().upsertGraph(data).returning('*');

    return res.status(201).json({
        result : subCategory,
        message : "Sub Category added successfully"
    })


  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }

}

const getAll = async (req,res) => {
  try{
        const subCategories = await SubCategory.query().select('*')
        .withGraphFetched('[category]')
        .modifyGraph('category',(builder) => { builder.select('id','name') })
        .where('is_delete','0');

        if(!subCategories[0]){
          return res.status(200).json({
            message : "No Sub Category Found"
        });
        }

        return res.status(200).json({
            result : subCategories,
            message : "Sub Category get successfully"
        });

  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }
}

const getOne = async (req,res) => {
    try{
            let id = req.params.id;
          const subCategory = await SubCategory.query().select('*')
                                                .withGraphFetched('[category]')
                                                .modifyGraph('category',(builder) => { builder.select('id','name') })
                                                .where('is_delete','0')
                                                .where('id',id);
          if(!subCategory[0]){
            return res.status(404).json({
              message : "No such Sub Category Found"
          });
          }
  
          return res.status(200).json({
              result : subCategory[0],
              message : "Sub Category get successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

  const updated = async (req,res) => {
    try{

        let data = req.body;
        data.id = req.params.id;
        await requestParams.sub_category.validate(data);

          const subCategory = await SubCategory.query().upsertGraph(data).returning('*');
  
          return res.status(201).json({
              result : subCategory,
              message : "Sub Category updated successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

  const deleted = async (req,res) => {
    try{
        
        let id = req.params.id;

          const subCategory = await SubCategory.query()
                                        .patch({"is_delete": "1"})
                                        .where("id",id)
                                        .returning('*');
  
          return res.status(201).json({
              result : subCategory,
              message : "Sub Category deleted successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

module.exports = {
  add,
  getAll,
  getOne,
  updated,
  deleted
};

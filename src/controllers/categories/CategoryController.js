const Category = require("../../models/Category");
const requestParams = require("../categories/categorySchema");

const add = async (req,res) => {
  try{
    let data = req.body;
    await requestParams.category.validate(data);

    const category = await Category.query().upsertGraph(data).returning('*');

    return res.status(201).json({
        result : category,
        message : "Category added successfully"
    })


  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }

}

const getAll = async (req,res) => {
  try{
        const categories = await Category.query().select('*')
        .withGraphFetched('[parentCategory]')
        .modifyGraph('parentCategory',(builder) => { builder.select('id','name') })
        .where('is_delete','0');

        if(!categories[0]){
          return res.status(200).json({
            message : "No Category Found"
        });
        }

        return res.status(200).json({
            result : categories,
            message : "Category get successfully"
        });

  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }
}

const getOne = async (req,res) => {
    try{
            let id = req.params.id;
          const category = await Category.query().select('*')
                                                .withGraphFetched('[parentCategory]')
                                                .modifyGraph('parentCategory',(builder) => { builder.select('id','name') })
                                                .where('is_delete','0')
                                                .where('id',id);
          if(!category[0]){
            return res.status(404).json({
              message : "No such Category Found"
          });
          }
  
          return res.status(200).json({
              result : category[0],
              message : "Category get successfully"
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
        await requestParams.category.validate(data);

          const category = await Category.query().upsertGraph(data).returning('*');
  
          return res.status(201).json({
              result : category,
              message : "Category updated successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

  const deleted = async (req,res) => {
    try{
        
        let id = req.params.id;

          const category = await Category.query()
                                        .patch({"is_delete": "1"})
                                        .where("id",id)
                                        .returning('*');
  
          return res.status(201).json({
              result : category,
              message : "Category deleted successfully"
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

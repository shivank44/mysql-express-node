const ParentCategory = require("../../models/ParentCategory");
const requestParams = require("../categories/categorySchema");

const add = async (req,res) => {
  try{
    let data = req.body;
    await requestParams.parentCategory.validate(data);

    const parentCategory = await ParentCategory.query().upsertGraph(data).returning('*');

    return res.status(201).json({
        result : parentCategory,
        message : "Parent Category added successfully"
    })


  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }

}

const getAll = async (req,res) => {
  try{
        const parentCategories = await ParentCategory.query().select('*').where('is_delete','0');

        if(!parentCategories[0]){
          return res.status(200).json({
            message : "No Parent Category Found"
        });
        }

        return res.status(200).json({
            result : parentCategories,
            message : "Parent Category get successfully"
        });

  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }
}

const getOne = async (req,res) => {
    try{
            let id = req.params.id;
          const parentCategory = await ParentCategory.query().select('*')
                                                    .where('is_delete','0')
                                                    .where('id',id);
          if(!parentCategory[0]){
            return res.status(404).json({
              message : "No such Parent Category Found"
          });
          }
  
          return res.status(200).json({
              result : parentCategory[0],
              message : "Parent Category get successfully"
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
        await requestParams.parentCategory.validate(data);

          const parentCategory = await ParentCategory.query().upsertGraph(data).returning('*');
  
          return res.status(201).json({
              result : parentCategory,
              message : "Parent Category updated successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

  const deleted = async (req,res) => {
    try{
        
        let id = req.params.id;

          const parentCategory = await ParentCategory.query()
                                        .patch({"is_delete": "1"})
                                        .where("id",id)
                                        .returning('*');
  
          return res.status(201).json({
              result : parentCategory,
              message : "Parent Category deleted successfully"
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

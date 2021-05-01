const Product = require("../../models/Product");
const requestParams = require("../product/productSchema");

const add = async (req,res) => {
  try{
    let data = req.body;
    await requestParams.product.validate(data);

    const product = await Product.query().upsertGraph(data).returning('*');

    return res.status(201).json({
        result : product,
        message : "Product added successfully"
    })


  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }

}

const getAll = async (req,res) => {
  try{
        const products = await Product.query().select('*')
        .withGraphFetched('[subCategory]')
        .modifyGraph('subCategory',(builder) => { builder.select('id','name') })
        .where('is_delete','0');

        if(!products[0]){
          return res.status(200).json({
            message : "No Product Found"
        });
        }

        return res.status(200).json({
            result : products,
            message : "Product get successfully"
        });

  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }
}

const getOne = async (req,res) => {
    try{
            let id = req.params.id;
          const product = await Product.query().select('*')
                                                .withGraphFetched('[subCategory]')
                                                .modifyGraph('subCategory',(builder) => { builder.select('id','name') })
                                                .where('is_delete','0')
                                                .where('id',id);
          if(!product[0]){
            return res.status(404).json({
              message : "No such Product Found"
          });
          }
  
          return res.status(200).json({
              result : product[0],
              message : "Product get successfully"
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
        await requestParams.product.validate(data);

          const product = await Product.query().upsertGraph(data).returning('*');
  
          return res.status(201).json({
              result : product,
              message : "Product updated successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

  const deleted = async (req,res) => {
    try{
        
        let id = req.params.id;

          const product = await Product.query()
                                        .patch({"is_delete": "1"})
                                        .where("id",id)
                                        .returning('*');
  
          return res.status(201).json({
              result : product,
              message : "Product deleted successfully"
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

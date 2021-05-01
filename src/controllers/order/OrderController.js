const Order = require("../../models/Order");
const requestParams = require("./orderSchema");

const add = async (req,res) => {
  try{
    let data = req.body;
    await requestParams.order.validate(data);

    const order = await Order.query().upsertGraph(data).returning('*');

    return res.status(201).json({
        result : order,
        message : "Order added successfully"
    })


  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }

}

const getAll = async (req,res) => {
  try{
        const orders = await Order.query().select('*')
        .withGraphFetched('[user,orderProducts.[product]]')
        .where('is_delete','0');

        if(!orders[0]){
          return res.status(200).json({
            message : "No Order Found"
        });
        }

        return res.status(200).json({
            result : orders,
            message : "Order get successfully"
        });

  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }
}

const getOne = async (req,res) => {
    try{
            let id = req.params.id;
          const order = await Order.query().select('*')
                                              .withGraphFetched('[user,orderProducts.[product]]')
                                              .where('is_delete','0')
                                              .where('id',id);
          if(!order[0]){
            return res.status(404).json({
              message : "No such Order Found"
            });
          }
  
          return res.status(200).json({
              result : order[0],
              message : "Order get successfully"
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
        await requestParams.order.validate(data);

          const order = await Order.query().upsertGraph(data).returning('*');
  
          return res.status(201).json({
              result : order,
              message : "Order updated successfully"
          });
  
    }catch(err){
      let errMessage = err.message ? err.message : err[0].message;
      res.status(500).json ({ error : errMessage });
    }
  }

  const deleted = async (req,res) => {
    try{
        
        let id = req.params.id;

          const order = await Order.query()
                                        .patch({"is_delete": "1"})
                                        .where("id",id)
                                        .returning('*');
  
          return res.status(201).json({
              result : order,
              message : "Order deleted successfully"
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

const { Model } = require('objection');

class OrderProduct extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'order_products';
    }

    static get relationMappings() {
        const Order = require('../models/Order');
        const Product = require('../models/Product');
        return {
            order: {
                relation: Model.HasOneRelation,
                modelClass: Order,
                join: {
                    from: 'order_products.order_id',
                    to: 'orders.id',
                }
            },
            product: {
                relation: Model.HasOneRelation,
                modelClass: Product,
                join: {
                    from: 'order_products.product_id',
                    to: 'products.id',
                }
            }
        }
    }
      
      $formatJson(json, opt) {
        json = super.$formatJson(json, opt);
        return json
    }


    async $beforeInsert() {
        await super.$beforeInsert();
    }

    async $beforeUpdate() {
        await super.$beforeUpdate();
    }

}

module.exports = OrderProduct;
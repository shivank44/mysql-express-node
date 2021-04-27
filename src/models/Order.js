const { Model } = require('objection');

class Order extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'orders';
    }

    static get relationMappings() {
        const OrderProduct = require('../models/OrderProduct');
        const User = require('../models/User');
        return {
            orderProducts: {
                relation: Model.HasManyRelation,
                modelClass: OrderProduct,
                join: {
                    from: 'orders.id',
                    to: 'order_products.order_id',
                }
            },
            user: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'orders.user_id',
                    to: 'users.id',
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

module.exports = Order;
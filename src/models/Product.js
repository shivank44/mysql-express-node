const { Model } = require('objection');

class Product extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'products';
    }

    static get relationMappings() {
        const SubCategory = require('../models/SubCategory');
        return {
            subCategory: {
                relation: Model.HasOneRelation,
                modelClass: SubCategory,
                join: {
                    from: 'products.sub_category_id',
                    to: 'sub_categories.id',
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

module.exports = Product;
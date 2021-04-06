const { Model } = require('objection');

class SubCategory extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'sub_categories';
    }

    static get relationMappings() {
        const Category = require('./Category');
        return {
            category: {
                relation: Model.HasOneRelation,
                modelClass: Category,
                join: {
                    from: 'sub_categories.category_id',
                    to: 'categories.id',
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

module.exports = SubCategory;
const { Model } = require('objection');

class ParentCategory extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'parent_categories';
    }

    static get relationMappings() {
        const Category = require('./Category');
        return {
            categories: {
                relation: Model.HasManyRelation,
                modelClass: Category,
                join: {
                    from: 'categories.parent_category_id',
                    to: 'parent_categories.id',
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

module.exports = ParentCategory;
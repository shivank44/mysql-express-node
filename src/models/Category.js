const { Model } = require('objection');

class Category extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'categories';
    }

    static get relationMappings() {
        const ParentCategory = require('./ParentCategory');
        return {
            parentCategory: {
                relation: Model.HasOneRelation,
                modelClass: ParentCategory,
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

module.exports = Category;
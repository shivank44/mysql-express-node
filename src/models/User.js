const { Model } = require('objection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'users';
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
      
      $formatJson(json, opt) {
        json = super.$formatJson(json, opt);
        delete json.password;
        return json
    }

    async comparePassword(password) {
        if (!password) {
            return false;
        }
        let pass = await bcrypt.compare(password, this.password);
        return pass;
    }

    async getJWT() {
        return await jwt.sign({
            id: this.id,
            role: this.role,
        }, process.env.JWT_KEY, { expiresIn: '10h' });
    }


    async $beforeInsert() {
        await super.$beforeInsert();

        this.password = await bcrypt.hashSync(this.password, 10);
    }

    async $beforeUpdate() {
        await super.$beforeUpdate();

        if (this.password) {
            this.password = await bcrypt.hashSync(this.password, 10);
        }
    }

}

module.exports = User;
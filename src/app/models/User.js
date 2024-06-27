import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            email: Sequelize.STRING,
            skill: Sequelize.STRING
        },
            {
                sequelize
            }
        )
    }
};


export default User;
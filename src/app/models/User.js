import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            id: Sequelize.STRING,
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            email: Sequelize.STRING,
            skill: Sequelize.STRING
        },
            {
                sequelize,
                timestamps: true
            }
        )
    }
};


export default User;
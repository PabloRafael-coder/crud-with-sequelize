'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUUI,
        AllowNull: false
      },
      name: Sequelize.STRING,
      age: Sequelize.INTEGER,
      email: Sequelize.STRING,
      skill: Sequelize.STRING

    })
  },

  // async down(queryInterface, Sequelize) {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // }
};

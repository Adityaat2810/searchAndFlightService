'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:"kempegoda International airport",
        cityId:11,
        createdAt:new Date(),
        updatedAt: new Date()
      
      },
      {
        name:"kempegoda International airport",
        cityId:11,
        createdAt:new Date(),
        updatedAt: new Date()

      },
      {
        name:"Rajeev Gandhi International airport",
        cityId:13,
        createdAt:new Date(),
        updatedAt: new Date()

      },
      {
        name:"Mysore International airport",
        cityId:3,
        createdAt:new Date(),
        updatedAt: new Date()

      },
      {
        name:"Punjab International airport",
        cityId:3,
        createdAt:new Date(),
        updatedAt: new Date()

      }


    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

const { Category } = require('../models');

//Seed data for the Category table
const categoryData = [
  {
    category_name: 'television',
  },
  {
    category_name: 'pictures',
  },
  {
    category_name: 'pencils',
  },
  {
    category_name: 'sweatshirt',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

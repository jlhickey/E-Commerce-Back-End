const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    item: 'glasses',
    price: '$49.99',
    id: '4'
  },
  {item: 'hand lotion',
    price: '$12.00',
    id: '3'
    
  },
  {
    item: 'towel',
    price: '$25.00',
    id: '5'
  },
  {
    item: 'glue',
    price: '$9.99',
    id: '6'
  },
  {
    item: 'television',
    price: '$449.99',
    id: '7'
  },
  {
    item: 'picture',
    price: '$30.00',
    id: '8'
  },
  {
    item: 'pencil',
    price: '$.99',
    id: '1'
  },
  {
    item: 'sweat shirt',
    price: '$25.99',
    id: '9'
  },
  {
    item: 'cereal',
    price: '$4.99',
    id: '10'
  },
  {
    item: 'chips',
    price: '$4.99',
    id: '11'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

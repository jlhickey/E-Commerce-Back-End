const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedThings = require('./thing-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('sync database');
  await seedUsers();
  console.log('user seeded');

  await seedComment();
  console.log('comment seeded');

  await seedThings();
  console.log('things seeded');

  process.exit(0);
};

seedAll();

const sequelize = require('../config/connection');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  process.exit(0);
};

seedDatabase();

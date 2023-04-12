const sequelize = require("../config/connection");
const { User, Blog } = require("../models");

const userData = require("./userData.json");
const blogData = require("./blogData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });

    // await Blog.bulkCreate(blogData, {
    //   individualHooks: true,
    //   returning: true,
    // });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const blog of blogData) {
  //   await Blog.create({
  //     ...blog,
  //     // is this needed?
  //     user_id: users[Math.floor(Math.random() * users.lenght)].id,
  //   });
  // }
  process.exit(0);
};

seedDatabase();

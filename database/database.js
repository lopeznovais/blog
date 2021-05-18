const Sequelize = require("sequelize");

const connection = new Sequelize("blog", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  timezone: "-03:00",
});

module.exports = connection;

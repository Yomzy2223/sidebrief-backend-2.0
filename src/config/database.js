const { sequelize } = require("../data/entities/index");

const connectDb = async () => {
  console.log("Checking database connection...");

  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDb;

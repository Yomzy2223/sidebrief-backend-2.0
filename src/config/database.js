const { PrismaClient } = require("@prisma/client");

const connectDb = async () => {
  console.log("Checking database connection...");

  try {
    const prisma = new PrismaClient();
    const check = await prisma.$connect();
    console.log("checkddd", check);
  } catch (error) {
    console.log("Database connection failed", error);
    // process.exit(1);
  }
};

module.exports = connectDb;

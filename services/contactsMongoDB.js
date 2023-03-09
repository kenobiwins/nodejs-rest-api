const mongoose = require("mongoose");

const { MONGO_DB_HOST, NODE_ENV } = process.env;
const isDevMode = NODE_ENV === "development";

const connectTocontactsMongoDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(MONGO_DB_HOST);
    isDevMode && console.log("Great, database connection successful");
  } catch (e) {
    isDevMode && console.log(`Can't connect to DB. Aborting process...\nError: ${e}`);
    return false;
  }

  return true;
};

module.exports = connectTocontactsMongoDB;

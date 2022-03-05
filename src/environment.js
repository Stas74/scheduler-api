const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);
console.log("PATH", PATH)

require("dotenv").config({ path: PATH });

module.exports = ENV;

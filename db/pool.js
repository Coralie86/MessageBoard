const {Pool} = require("pg");

// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "coralie",
//   database: "top_users",
//   password: "Chipie1312",
//   port: 5432 // The default port
// });

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL
});
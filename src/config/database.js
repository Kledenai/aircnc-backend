const mongoose = require("mongoose");
const database = mongoose;

database.set("useNewUrlParser", true);
database.set("useUnifiedTopology", true);
database.set("useFindAndModify", false);
database.set("useCreateIndex", true);

database.Promise = global.Promise;

module.exports = database
  .connect(
    process.env.MONGO_URL ||
      "mongodb+srv://kledenai:AalqHtdTWgGeEdTf@cluster0-rhehb.mongodb.net/aircnc?retryWrites=true&w=majority"
  )
  .then(() => {})
  .catch(err => {
    console.log(err);
  });

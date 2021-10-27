const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (e) {
      if (e) console.log(e);
    }
  );
  console.log("Mongoose connection started");
};

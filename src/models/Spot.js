const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      red: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Spot", SpotSchema);

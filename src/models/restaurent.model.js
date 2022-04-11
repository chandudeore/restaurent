const mongoose = require("mongoose");

const restaurentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    votes: { type: Number, required: true },
    reviews: { type: String, required: true },
    cost: { type: Number, required: true },
    payment_method: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
//console.log(restaurentSch{default:true},
module.exports = mongoose.model("restaurants", restaurentSchema);

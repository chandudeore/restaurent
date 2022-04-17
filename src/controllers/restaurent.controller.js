const express = require("express");

const Restaurent = require("../models/restaurent.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const restaurants = await Restaurent.create(req.body);

    return res.status(201).send(restaurants);
    console.log(restaurants);
  } catch (e) {
    res.status(500).json({ message: "Something get wrong" });
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page;
    const size = req.query.limit;
    //const rating = req.query.rating;
    let restaurants;
    if (req.query.rating) {
      restaurants = await Restaurent.find({ rating: { $lt: req.query.rating } })
        .skip((page - 1) * size)
        .limit(size)
        .lean()
        .exec();
    } else {
      restaurants = await Restaurent.find()
        .skip((page - 1) * size)
        .limit(size)
        .lean()
        .exec();
    }

    return res.status(202).send(restaurants);
  } catch (e) {
    res.status(500).json({ message: "Something get Wrong" });
  }
});
router.get("", async (req, res) => {
  try {
    const restaurants = await Restaurent.find().lean().exec();

    return res.status(203).send(restaurants);
  } catch (e) {
    res.status(500).json({ message: "Something get Wrong" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const restaurants = await Restaurent.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(202).send(restaurants);
  } catch (e) {
    res.status(500).json({ message: "Something get Wrong" });
  }
});

module.exports = router;

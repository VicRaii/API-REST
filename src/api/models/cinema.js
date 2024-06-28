const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    adress: { type: String, required: true, trim: true },
    name: { type: String, required: true },
    movies: [{ type: mongoose.Types.ObjectId, ref: "movies" }],
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model("cinemas", cinemaSchema, "cinemas");
module.exports = Cinema;

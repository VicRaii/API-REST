const Cinema = require("../models/cinema");

const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinema = await Cinema.findById(id).populate("movies");
    return res.status(200).json(cinema);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postCinema = async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body);
    const cinemaSaved = await newCinema.save();
    res.status(201).json(cinemaSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateCinema = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newCinema = new Cinema(req.body);

    newCinema._id = id;

    const cinemaUpdated = await Cinema.findByIdAndUpdate(id, newCinema, {
      new: true,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinemaDeleted = await Cinema.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Elemento eliminado",
      elemento: cinemaDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getCinemas,
  postCinema,
  updateCinema,
  deleteCinema,
  getCinema,
};

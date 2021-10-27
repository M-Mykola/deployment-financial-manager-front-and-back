const Tranzaction = require("./schema");

const Tranzactions = {
  async createTranzactions(req, res, next) {
    try {
      const create = await Tranzaction.create({
        categories: req.body.categories,
        type_of_operation: req.body.type_of_operation,
        sum: req.body.sum,
        date: req.body.date,
        description: req.body.description,
      });
      res.status(201).json({ message: "Tranzactions created" });
    } catch (e) {
      next(e);
    }
  },

  async getAllTranzactions(req, res, next) {
    try {
      const getAll = await Tranzaction.find();
      res.status(200).json(getAll);
    } catch (e) {
      next(e);
    }
  },

  async updateTranzactions(req, res, next) {
    try {
      const update = await Tranzaction.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!update) {
        res.status(404).json({ message: "Updated Tranzactions failed!" });
      } else {
        res
          .status(201)
          .json({ message: "Tranzactions updated successfully", update });
      }
    } catch (e) {
      next(e);
    }
  },
  async deleteTranzactions(req, res, next) {
    try {
      const remove = await Tranzaction.findByIdAndDelete(req.params.id);
      if (!remove) {
        res.status(404).json({
          message: `Removed tranzactions with id: ${req.params.id} failed`,
        });
      } else {
        res.status(410).json({ message: "Tranzactions removed successfully" });
      }
    } catch (e) {
      next(e);
    }
  },
};

module.exports = Tranzactions;

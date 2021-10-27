const Category = require("./schema");

const Options = {
  async createCategories(req, res, next) {
    try {
      const create = await Category.create({
        categories: req.body.categories,
        description: req.body.description,
      });
      res.status(201).json({ message: "Category created" });
    } catch (e) {
      next(e);
    }
  },
  async getAllCategories(req, res, next) {
    try {
      const getAll = await Category.find();
      res.status(200).json(getAll);
    } catch (e) {
      next(e);
    }
  },
  async getOneCategories(req, res, next) {
    try {
      const getOne = await Category.findById(req.params.id);
      if (!getOne) {
        res.status(404).json({ message: "Category not found!" });
      } else {
        res.status(200).json(getOne);
      }
    } catch (e) {
      next(e);
    }
  },
  async updateCategories(req, res, next) {
    try {
      const update = await Category.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!update) {
        res.status(404).json({ message: "Updated category failed!" });
      } else {
        res
          .status(201)
          .json({ message: "Category updated successfully", update });
      }
    } catch (e) {
      next(e);
    }
  },
  async deleteCategories(req, res, next) {
    try {
      const remove = await Category.findByIdAndDelete(req.params.id);
      if (!remove) {
        res.status(404).json({
          message: `Removed category with id: ${req.params.id} failed`,
        });
      } else {
        res.status(410).json({ message: "Category removed successfully" });
      }
    } catch (e) {
      next(e);
    }
  },
};

module.exports = Options;

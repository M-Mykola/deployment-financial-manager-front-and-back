const { Router } = require("express");

const {
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
  getAllCategories,
} = require("./categories");

const router = new Router();

router.post("/", createCategories);
router.get("/all", getAllCategories);
router.get("/:id", getOneCategories);
router.put("/:id", updateCategories);
router.delete("/:id", deleteCategories);

module.exports = router;

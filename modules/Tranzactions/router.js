const { Router } = require("express");
const {
  createTranzactions,
  getAllTranzactions,
  updateTranzactions,
  deleteTranzactions,
} = require("./tranzactions");

const router = new Router();

router.post("/", createTranzactions);
router.get("/all", getAllTranzactions);
router.put("/:id", updateTranzactions);
router.delete("/:id", deleteTranzactions);
module.exports = router;

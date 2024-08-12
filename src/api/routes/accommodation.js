const { isHotelManager } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const {
  getAccommodationById,
  getAccommodations,
  postAccommodation,
  updateAccommodation,
  deleteAccommodation,
} = require("../controllers/accommodation");

const accommodationsRouter = require("express").Router();

accommodationsRouter.get("/:id", getAccommodationById);
accommodationsRouter.get("/", getAccommodations);
accommodationsRouter.post("/", [isHotelManager, upload("Accommodations").array("imgs", 10)], postAccommodation);
accommodationsRouter.put("/:id", [isHotelManager, upload("Accommodations").array("imgs", 10)], updateAccommodation);
accommodationsRouter.delete("/:id", [isHotelManager], deleteAccommodation);

module.exports = accommodationsRouter;

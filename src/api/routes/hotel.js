const { isHotelManager, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getHotelById, getHotels, postHotel, updateHotel, deleteHotel } = require("../controllers/hotel");

const hotelsRouter = require("express").Router();

hotelsRouter.get("/:id", getHotelById);
hotelsRouter.get("/", getHotels);
hotelsRouter.post("/", [isAdmin, upload("Hotels").single("img")], postHotel);
hotelsRouter.put("/:id", [isHotelManager, upload("Hotels").single("img")], updateHotel);
hotelsRouter.delete("/:id", [isAdmin], deleteHotel);

module.exports = hotelsRouter;

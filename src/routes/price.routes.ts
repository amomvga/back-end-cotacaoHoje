import express from "express";
import PriceController from "../controllers/PriceController";

const priceRouter = express.Router();

priceRouter.get("/price/:coin", PriceController.findCoin);

export { priceRouter };

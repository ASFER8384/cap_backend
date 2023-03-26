import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createFoodController,
  deleteFoodController,
  getFoodController,
  getSingleFoodController,
  foodCategoryController,
  foodCountController,
  foodFiltersController,
  foodListController,
  foodPhotoController,
  realtedFoodController,
  searchFoodController,
  updateFoodController,
} from "../controller/foodcontroller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import formidable from "express-formidable";


//router object
const router = express.Router();

//routes

//create food
router.post(
  "/create-food",
  requireSignIn,
  isAdmin,
  formidable(),
  createFoodController
);

//update food
router.put(
  "/update-food/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateFoodController
);

//get foods
router.get("/get-food", getFoodController);

//single food
router.get("/get-food/:slug", getSingleFoodController);

//get photo
router.get("/food-photo/:pid", foodPhotoController);

//delete rfood
router.delete("/delete-food/:pid", deleteFoodController);

//filter food
router.post("/food-filters", foodFiltersController);

//food count
router.get("/food-count", foodCountController);

//food per page
router.get("/food-list/:page", foodListController);

//search food
router.get("/search/:keyword", searchFoodController);

//similar food
router.get("/related-food/:pid/:cid", realtedFoodController);

//category wise food
router.get("/food-category/:slug", foodCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;

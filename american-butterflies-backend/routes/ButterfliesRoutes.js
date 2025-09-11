import  express  from "express";
import { ButterflyValidator } from "../validators/butterflyValidators.js";
import { validateFields } from "../middlewares/validateFields.js";
import { getAllButterflies, getById, createButterfly, updateButterfly, deleteButterfly } from '../controllers/ButterfliesController.js'

const butterfliesRouter = express.Router()

//Get
butterfliesRouter.get("/", getAllButterflies);

//GetById
butterfliesRouter.get("/:id", getById);

//createButterfly
butterfliesRouter.post("/", ButterflyValidator, validateFields, createButterfly)

//updateButterfly
butterfliesRouter.put("/:id", ButterflyValidator, validateFields, updateButterfly)

//deleteButterfly
butterfliesRouter.delete("/:id", deleteButterfly)


export default butterfliesRouter;

import express from "express";
import { getFinished, getUnfinished } from "../controllers/booksController.js";

const router = express.Router();

router.get("/finished", getFinished);
router.get("/unfinished", getUnfinished); /// THis new right here


export default router;
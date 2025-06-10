import express from "express";
import { getFinished } from "../controllers/booksController.js";

const router = express.Router();

router.get("/finished", getFinished);


export default router;
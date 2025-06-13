import express from "express";
import { getFinished, getUnfinished, deleteBook } from "../controllers/booksController.js";

const router = express.Router();

router.get("/finished", getFinished);
router.get("/unfinished", getUnfinished); /// THis new right here

router.delete("/delete", deleteBook);


export default router;
import express from "express";
import cors from "cors";
import { getDestination, bookDestination } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getDestination); // Fetch destinations
router.post("/book", bookDestination); // Handle booking

export default router;

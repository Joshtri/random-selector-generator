import express from "express";
import { selectionPage } from "../controllers/selectionController.js";
const router = express.Router();

router.get('/seleksi', selectionPage);


export default router;
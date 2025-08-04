import express from "express";
import v1ApiRoutesAuth from "./v1/authRoutes.js"; // ← .js

const router = express.Router();
router.use("/v1", v1ApiRoutesAuth);

export default router;

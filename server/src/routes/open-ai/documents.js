import express from "express";

import { getDocuments } from "../../controllers/documentsController";

const router = express.Router();

router.get("/", getDocuments);

export default router;

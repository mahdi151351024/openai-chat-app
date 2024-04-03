import express from "express";

import chat from "./open-ai/chat";
import documents from "./open-ai/documents";

const router = express.Router();

router.use("/chat", chat);
router.use("/documents", documents);

export default router;

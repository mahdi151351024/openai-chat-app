import express from "express";

import { postUserQuery } from "../../controllers/userQueryController";
import { handleValidation } from "../../middlewares";
import validators from "../../models/request-models";

const router = express.Router();

router.post(
  "/",
  handleValidation(validators.userQuerySchemaValidate),
  postUserQuery
);

export default router;

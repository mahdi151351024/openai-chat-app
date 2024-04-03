import { getDocumentsService } from "../services/DocumentsService";
import { apiFailed, apiSuccess } from "../utilities/apiResponse";

export const getDocuments = async (req, res, next) => {
  try {
    const documents = await getDocumentsService(req);
    return res.json(apiSuccess(documents.message, documents.data));
  } catch (error) {
    return res.json(apiFailed(error.message));
  }
};

export default {};

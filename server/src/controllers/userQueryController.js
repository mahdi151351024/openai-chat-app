import { postUserQueryService } from "../services/UserQueryService";
import { apiFailed, apiSuccess } from "../utilities/apiResponse";

export const postUserQuery = async (req, res, next) => {
  try {
    const query = await postUserQueryService(req);
    return res.json(apiSuccess(query.message, query.data));
  } catch (error) {
    return res.json(apiFailed(error.message));
  }
};

export default {};

import { getChatResponse } from "../utilities/openAiApiHandler";
import Document from "../models/data-models/Document";

export const postUserQueryService = async (req) => {
  const { query } = req.body;
  const response = await getChatResponse(query);
  const content = response && response.choices[0].message.content;
  await Document.create({
    usersQuery: query,
    openAiResponse: content,
    responseSuccess: true
  });
  return {
    message: "Query response get successfully",
    data: content,
  };
};

export default {};

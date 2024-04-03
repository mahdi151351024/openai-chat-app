import { makeRequest } from "../utilities/httpRequestHandler";
import config from "../config";

export const getChatResponse = async (query) => {
  let postData = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are all rounder assistant, skilled in any general or complex thing knowledge",
      },
      {
        role: "user",
        content: query,
      },
    ],
  });
  let options = {
    hostname: "api.openai.com",
    path: `/v1/chat/completions`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.OPEN_AI_API_KEY}`,
      "Content-Type": "application/json",
      "Content-Length": postData.length,
    },
  };
  const response = await makeRequest(options, postData);
  if (response && response.id) return response;
  else throw new Error("Something went wrong");
};

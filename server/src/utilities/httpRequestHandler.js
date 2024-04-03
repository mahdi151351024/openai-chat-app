import https from "https";

export const makeRequest = (options, postData = null) => {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        console.log(data);
        resolve(JSON.parse(data));
      });
    });

    request.on("error", (error) => {
      reject(error);
    });

    if (postData) {
      request.write(postData);
    }

    request.end();
  });
};

export default {};

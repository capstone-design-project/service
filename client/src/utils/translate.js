const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

var subscriptionKey = process.env.TRANSLATE_API_KEY;
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "koreacentral";

module.exports = {
  wordTranslate(word) {
    return axios({
      baseURL: endpoint,
      url: "/dictionary/lookup",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": '32b07018d12641bdba6e062f545b70db',
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
        "X-ClientTraceId": uuidv4().toString(),
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: "ko",
      },
      data: [
        {
          text: word,
        },
      ],
      responseType: "json",
    }).then((res) => {
      var ko_list = res.data[0]["translations"].map(
        (info) => info["normalizedTarget"]
      );
      return ko_list;
    });
  },
  textTranslate(text) {
    return axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
        "X-ClientTraceId": uuidv4().toString(),
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: ["ko"],
      },
      data: [
        {
          text: text,
        },
      ],
      responseType: "json",
    }).then((res) => {
      return res.data[0]["translations"][0]["text"];
    });
  },
};

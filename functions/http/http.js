const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {
  const { category, page } = event.queryStringParameters;
  const API_SECRETE = process.env.API_SECRETE;
  const url = `https://api.themoviedb.org/3/tv/${category}?api_key=${API_SECRETE}&language=en-US&page=${page}}`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    const { status, statusText, headers, data } = err.respose;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

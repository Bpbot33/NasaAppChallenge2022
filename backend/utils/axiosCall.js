const axios = require("axios");

// body = {
//   search: "people:Tibbitts",
//   skip: 0,
//   queryType: "full",
//   searchMode: "all",
//   select: "metadata_storage_name,people, keyphrases",
//   top: 10,
// };

async function axiosCall(body) {
  const URL =
    "https://cognitive-search-nasa-space-apps-2022.search.windows.net/indexes/azureblob-index2/docs/search?api-version=2021-04-30-Preview";

  const apyKey = "nmexQW2BU4Ua7rdnn2Zn6eGdBKhkRM1LYYfnwLlpcJAzSeAqGYWH";

  const headers = { "Content-Type": "application/json", "api-key": apyKey };

  try {
    const res = await axios({
      url: URL,
      method: "POST",
      headers: headers,
      data: body,
    });
    return res;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
}
module.exports = axiosCall;

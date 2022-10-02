const data = require("../data/data.json");
const axiosCall = require("../utils/axiosCall");

const publicController = {
  /* SEARCH ROUTE */
  searchPost: async (req, res) => {
    console.log(req.body);
    const skip = 0;
    const select =
      "metadata_storage_name,people,keyphrases,organizations,locations,imageTags";
    const search = "*";

    const IAApiCall = await axiosCall({
      search: search,
      skip: skip,
      queryType: "full",
      searchMode: "all",
      select: select,
      top: 20,
    });

    console.log(IAApiCall?.data);

    res.status(200).json({ msg: "entró" });
  },
  searchResponse: async (req, res) => {
    res.status(200).json({ msg: "entró" });
  },
};

module.exports = publicController;

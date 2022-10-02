const data = require("../data/data.json");
const axiosCall = require("../utils/axiosCall");

const publicController = {
  /* SEARCH ROUTE */
  searchPost: async (req, res) => {
    // const IACall = axiosCall({
    //   search: "people:Tibbitts",
    //   skip: 0,
    //   queryType: "full",
    //   searchMode: "all",
    //   select: "metadata_storage_name,people, keyphrases",
    //   top: 10,
    // });

    console.log(req.body);

    res.status(200).json({ msg: "entró" });
  },
  searchResponse: async (req, res) => {
    res.status(200).json({ msg: "entró" });
  },
};

module.exports = publicController;

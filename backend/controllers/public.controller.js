const data = require("../data/data.json");

const publicController = {
  /* EXAMPLE ROUTE */
  example: async (req, res) => {
    /* configs */
    const dataToArray = Object.keys(data).map((k) => data[k]);
    const dataValuesArray = dataToArray[1];
    const dataValuesKeys = Object.keys(dataValuesArray);
    /* la data */
    const dataPosition0Keys = Object.keys(dataValuesArray[0]);
    const dataPosition1Keys = Object.keys(dataValuesArray[1]);
    const dataPosition2Keys = Object.keys(dataValuesArray[2]);
    const dataPosition3Keys = Object.keys(dataValuesArray[3]);
    const dataPosition4Keys = Object.keys(dataValuesArray[4]);
    const dataPosition5Keys = Object.keys(dataValuesArray[5]);
    const dataPosition6Keys = Object.keys(dataValuesArray[6]);
    const dataPosition7Keys = Object.keys(dataValuesArray[7]);

    console.log("data length total -->", dataToArray.length);
    console.log("valores lenght -->", dataValuesArray.length);
    console.log("Value Keys -->", dataValuesKeys);
    console.log("Value key in Key 0 -->", dataPosition0Keys);
    console.log("Value key in Key 1 -->", dataPosition1Keys);
    console.log("Value key in Key 2 -->", dataPosition2Keys);
    console.log("Value key in Key 3 -->", dataPosition3Keys);
    console.log("Value key in Key 4 -->", dataPosition4Keys);
    console.log("Value key in Key 5 -->", dataPosition5Keys);
    console.log("Value key in Key 6 -->", dataPosition6Keys);
    console.log("Value key in Key 7 -->", dataPosition7Keys);

    res.status(200).json({ msg: "entró" });
  },
};

module.exports = publicController;

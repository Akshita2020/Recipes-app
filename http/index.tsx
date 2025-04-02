import axios from "axios";

const getRecepieList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: size || "20",
      tags,
    },
    headers: {
      "x-rapidapi-key": "bc7b0b0741mshc62157f890c4c44p17ff58jsn694737ea26b5",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };
  return await axios.request(options);
};

export default getRecepieList;

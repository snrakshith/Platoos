import axios from "axios";
import URL from "../../../../config/config";

export const getKitchens = async () => {
  // console.log(data);
  try {
    const response = await axios.get(URL + "/pickup-point", {
      headers: {
        "x-device-fingerprint": "TESTFINGERPRIONT"
      }
    });
    return response.data;
  } catch (err) {
    console.log(err);
    if (!err.response) {
      console.log(err);
    } else {
      console.log(err);
      if (err.response.data.code === "Bad Request") {
        throw {
          message: JSON.parse(err.response.data.message).message,
          exit: false
        };
      }
    }
    throw { message: "Something went Wrong", exit: false };
  }
};

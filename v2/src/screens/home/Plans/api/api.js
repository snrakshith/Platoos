import axios from "axios";
import URL from "../../../../config/config";

export const getPlans = async () => {
  try {
    const response = await axios.get(URL + "/pickup-points/pp-1/plans", {
      headers: {
        "x-session-token": "8EgyhbGWOFJ_6ARv14XB-kHvgBxQjJiK",
        "x-device-fingerprint": "TESTFINGERPRIONT"
      }
    });
    return response.data;
    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};

getPlans();

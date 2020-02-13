import axios from "axios";
import { URL } from "../config/config";

// Circular Buttons for ScheduleEx
export const getDates = async () => {
  // console.log("hi");
};

// PickupEx Locations for Maps
export const pickupEx = async () => {
  try {
    const response = await axios.get(
      URL + "/kitchen/cffe9588-2dfe-11ea-9f67-46644069992f",
      {
        headers: {
          "x-device-fingerprint": "TESTFINGERPRIONT",
          "x-session-token": "8EgyhbGWOFJ_6ARv14XB-kHvgBxQjJiK"
        }
      }
    );
    // console.log(response.data.name);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// MenuEx
export const getMenu = async () => {
  // console.log("hi");
};

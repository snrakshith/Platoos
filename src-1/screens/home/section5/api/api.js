// import axios from "axios";
// import baseURL from "../../../../config/config";

// export default getKitchens = async () => {
//   // console.log(data);
//   try {
//     const response = await axios.get(
//       baseURL + "/kitchen/cffe9588-2dfe-11ea-9f67-46644069992f",
//       {
//         headers: {
//           "x-device-fingerprint": "TESTFINGERPRIONT",
//           "x-session-token": "8EgyhbGWOFJ_6ARv14XB-kHvgBxQjJiK"
//         }
//       }
//     );
//     return response;
//   } catch (err) {
//     console.log(err);
//     if (!err.response) {
//       console.log(err);
//     } else {
//       console.log(err);
//       if (err.response.data.code === "Bad Request") {
//         throw {
//           message: JSON.parse(err.response.data.message).message,
//           exit: false
//         };
//       }
//     }
//     throw { message: "Something went Wrong", exit: false };
//   }
// };

import axios from "axios";

const postMethod = async (obj,userName,route) => {
  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:5001${route}`,
      data: {
          ...obj,
          newUserName: userName
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postMethod;

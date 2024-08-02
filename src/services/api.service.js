// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
  const URL = "/api/v1/user";
  const data = {
    fullName: fullName,
    password: password,
    email: email,
    phone: phone,
  };
  return axios.post(URL, data);
};

const updateUserAPI = (_id, fullName, phone) => {
  const URL = "/api/v1/user";
  const data = {
    fullName: fullName,
    _id: _id,
    phone: phone,
  };

  return axios.put(URL, data);
};

const fetchAllUserAPI = (cusrrent, pageSize) => {
  const URL = `/api/v1/user?current=${cusrrent}&pageSize=${pageSize}`;

  return axios.get(URL);
};

const deleteUserAPI = (id) => {
  const URL = `/api/v1/user/${id}`;
  return axios.delete(URL);
};

const handleUploadFile = (file, folder) => {
  const URL_BACKEND = `/api/v1/file/upload`;
  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };

  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);

  return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
  const URL = "/api/v1/user";
  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone,
  };

  return axios.put(URL, data);
};

const loginUserAPI = (email, password) => {
  const URL = "/api/v1/auth/login";
  const data = {
    username: email,
    password: password,
    // delay: 5000,
  };
  return axios.post(URL, data);
};

export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
  handleUploadFile,
  updateUserAvatarAPI,
  loginUserAPI,
};

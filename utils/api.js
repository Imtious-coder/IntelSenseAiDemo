import axios from "axios";

export const AUTH_KEY = "&_";
export const USER_KEY = "__user";

export const setAuthHeader = () => {
  const token = getToken();

  if (token)
    axios.defaults.headers.common["Authorization"] = getToken()
      ? "Bearer " + getToken()
      : "";
  else {
    removeToken();
  }
};

export const sendEmail = async (data) => {
  return await axios
    .post("/api/contact/", data)
    .then((response) => {
      return response.status;
    })
    .catch((e) => e.message);
};

export const createPost = async (data) => {
  setAuthHeader();
  return await axios.post("/api/blog/", data);
};

// export const getPosts = async () => {
//   return await axios.get("/api/blog/?type=blog");
// };

export const getCaseStudies = async () => {
  return await axios.get("/api/blog/?type=case_study");
};

export const getNews = async () => {
  return await axios.get("/api/blog/?type=news");
};

export const getSinglePost = async (slug) => {
  return await axios.get("/api/blog/" + slug);
};

export const apiLogin = async (data) => {
  return await axios.post("/api/auth/token/", data).then((res) => {
    setToken(res.data.access);
    return res;
  });
};

export const getToken = () => {
  return typeof window !== "undefined" ? localStorage.getItem(AUTH_KEY) : null;
};

export const setNowUser = () => {
  axios
    .get("/api/auth/user/")
    .then((res) =>
      typeof window !== "undefined"
        ? localStorage.setItem(USER_KEY, JSON.stringify(res.data))
        : null
    );
};

export const getCategories = async () => axios.get("/api/blog/categories/");

export const getNowUser = () => {
  return typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(USER_KEY))
    : null;
};

export const removeNowUser = () => {
  return typeof window !== "undefined"
    ? localStorage.removeItem(USER_KEY)
    : null;
};

export const setToken = (data) => {
  if (typeof window !== "undefined") localStorage.setItem(AUTH_KEY, data);
  setAuthHeader();
  setNowUser();
};

export const removeToken = () => {
  if (typeof window !== "undefined") localStorage.removeItem(AUTH_KEY);
  if (getToken()) setAuthHeader();
};

export const getMyPosts = async (author) =>
  axios.get("/api/blog/?author=" + author);

export const isAuthenticated = async () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem(AUTH_KEY) : null;

  return await axios
    .post("/api/auth/token/verify/", { token: token })
    .catch((e) => {
      removeToken();
      throw e;
    });
};

export const apiGetUser = async () => axios.get("/api/auth/user/");

export const register = async (data) =>
  await axios.post("/api/auth/registration/", data);

export const uploadFile = async (form) => {
  setAuthHeader();
  return await axios.put("/api/file/", form);
};

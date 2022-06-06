import {isDev} from "../utils/isDev";

const API_CONSTANT = {
    BASE_URL: isDev() ? process.env.REACT_APP_BACKEND_SERVER_URL : process.env.REACT_APP_BACKEND_SERVER_PRODUCTION,
};

export default API_CONSTANT;

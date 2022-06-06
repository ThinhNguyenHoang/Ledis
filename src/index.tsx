import React from "react";
import ReactDOM from "react-dom/client";
import './styles/styles.less';
import {BrowserRouter} from "react-router-dom";
import {RouterConfig} from "./navigation/RouterConfig";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import API_CONSTANT from "./constants/apiContants";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

console.log("API ROOT IS: ", API_CONSTANT.BASE_URL);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <RouterConfig/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

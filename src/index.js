import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import productItemsSlice from "./pages/Cart/cartSlice";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        productItem: productItemsSlice,
    },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
                <App />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; // Import Provider
// import store from './pages/store'; // Import the Redux store
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}> {/* Wrap your App component with Provider and pass the store */}
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom";
import Application from "./app";

import store from './reducers'
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
    <Application/>
</Provider>, document.querySelector("#application-container"));

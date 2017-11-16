import {combineReducers, createStore, compose, applyMiddleware} from "redux";

//middlewares

// import utilsHandler from "../middlewares/utils-handler"

//reducers
import utils from "./utils"

import {routerForBrowser} from "redux-little-router";

const routes = {
    "/": {
        title: "CashOut"
    },
    "/#profile": {
        title: "PROFILE"
    },
    "/#bank": {
        title: "BANK"
    }
}

const router = routerForBrowser({routes, basename: '/cashout-cplus'});

const reducer = combineReducers({ utils, router: router.reducer});

const store = createStore(reducer, {}, compose(router.enhancer, applyMiddleware(
// utilsHandler,
router.middleware)));

window.store = store;

export default store;

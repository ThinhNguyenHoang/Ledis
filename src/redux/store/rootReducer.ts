import {combineReducers} from "@reduxjs/toolkit";
import {apiSlice} from "../features/apiSetup";
import {ROUTING_SLICE_KEY, routingSlice} from "../features/Routing/RoutingSlice";
import {TERMINAL_SLICE_KEY, terminalSlice} from "../features/Terminal/TerminalSlice";

const rootReducer = combineReducers({
    [ROUTING_SLICE_KEY]: routingSlice.reducer,
    [TERMINAL_SLICE_KEY]: terminalSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;

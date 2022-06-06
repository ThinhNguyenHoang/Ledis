import {RootState} from "../../store/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ROUTING_CONSTANTS from "../../../navigation/routes";


type RoutingSlice = {
    activePathKey: string;
}
const initialState: RoutingSlice = {
    activePathKey: ROUTING_CONSTANTS.ROOT,
}

export const ROUTING_SLICE_KEY = "routing";
export const routingSlice = createSlice({
    name: ROUTING_SLICE_KEY,
    initialState,
    reducers: {
        setActivePathKey: (state, action: PayloadAction<string>) => {
            state.activePathKey = action.payload;
        }
    },
});

export const routingSelector = {
    isTabSelected: (state: RootState, tabPredicate: () => boolean) => {
        return tabPredicate();
    }
}

export const {setActivePathKey} = routingSlice.actions;

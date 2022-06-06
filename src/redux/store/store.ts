import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSetup";
import { rtkQueryErrorLogger } from "../middleware/errorToastingMiddleware";
import rootReducer from "./rootReducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(apiSlice.middleware)
			.concat(rtkQueryErrorLogger);
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

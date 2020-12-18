import { combineReducers } from "redux";

import genreReducer from "./genre/genre.reducer";

export const rootReducer = combineReducers({
	genre: genreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

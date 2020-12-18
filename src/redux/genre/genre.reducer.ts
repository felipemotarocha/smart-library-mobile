import {
	FETCH_GENRES_WITH_BOOKS_FAILURE,
	FETCH_GENRES_WITH_BOOKS_START,
	FETCH_GENRES_WITH_BOOKS_SUCCESS,
	GenreActionsTypes,
} from "./genre.actions.types";
import { GenreState } from "./genre.reducer.types";

export const initialState: GenreState = {
	genres: null,
	genresWithBooks: null,
	loading: false,
};

const genreReducer = (
	state = initialState,
	action: GenreActionsTypes
): GenreState => {
	switch (action.type) {
		case FETCH_GENRES_WITH_BOOKS_START:
			return {
				...initialState,
				loading: true,
			};
		case FETCH_GENRES_WITH_BOOKS_SUCCESS:
			return {
				...initialState,
				genresWithBooks: action.payload,
			};
		case FETCH_GENRES_WITH_BOOKS_FAILURE:
			return {
				...initialState,
				loading: false,
			};
		default:
			return state;
	}
};

export default genreReducer;

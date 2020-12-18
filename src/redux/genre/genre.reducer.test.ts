import {
	FETCH_GENRES_WITH_BOOKS_FAILURE,
	FETCH_GENRES_WITH_BOOKS_START,
	FETCH_GENRES_WITH_BOOKS_SUCCESS,
} from "./genre.actions.types";
import genreReducer, { initialState } from "./genre.reducer";
import { MOCKED_GENRES_WITH_BOOKS } from "./genre.mocks";

describe("Genre Reducer", () => {
	it("should return the initial state", () => {
		expect(genreReducer(undefined, {} as any)).toEqual({
			...initialState,
		});
	});
	it("should handle the FETCH_GENRES_WITH_BOOKS_START action", () => {
		expect(
			genreReducer(undefined, {
				type: FETCH_GENRES_WITH_BOOKS_START,
			})
		).toEqual({
			...initialState,
			loading: true,
		});
	});
	it("should handle the FETCH_GENRES_WITH_BOOKS_SUCCESS action", () => {
		expect(
			genreReducer(undefined, {
				type: FETCH_GENRES_WITH_BOOKS_SUCCESS,
				payload: MOCKED_GENRES_WITH_BOOKS,
			})
		).toEqual({
			...initialState,
			genresWithBooks: MOCKED_GENRES_WITH_BOOKS,
			loading: false,
		});
	});
	it("should handle the FETCH_GENRES_WITH_BOOKS_FAILURE action", () => {
		expect(
			genreReducer(undefined, {
				type: FETCH_GENRES_WITH_BOOKS_FAILURE,
			})
		).toEqual({
			...initialState,
			genresWithBooks: null,
			loading: false,
		});
	});
});

export {};

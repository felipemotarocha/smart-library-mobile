import {
	fetchGenresWithBooksFailure,
	fetchGenresWithBooksStart,
	fetchGenresWithBooksSuccess,
} from "./genre.actions";
import {
	FETCH_GENRES_WITH_BOOKS_FAILURE,
	FETCH_GENRES_WITH_BOOKS_START,
	FETCH_GENRES_WITH_BOOKS_SUCCESS,
} from "./genre.actions.types";
import { MOCKED_GENRES_WITH_BOOKS } from "./genre.mocks";

describe("Genre Actions", () => {
	it("should create an action to start the fetch of the genres with books", () => {
		const expectedAction = {
			type: FETCH_GENRES_WITH_BOOKS_START,
		};
		expect(fetchGenresWithBooksStart()).toEqual(expectedAction);
	});
	it("should create an action to declare success in the fetch of the genres with books", () => {
		const expectedAction = {
			type: FETCH_GENRES_WITH_BOOKS_SUCCESS,
			payload: MOCKED_GENRES_WITH_BOOKS,
		};
		expect(fetchGenresWithBooksSuccess(MOCKED_GENRES_WITH_BOOKS)).toEqual(
			expectedAction
		);
	});
	it("should create an action to declare failure in the fetch of the genres with books", () => {
		const expectedAction = {
			type: FETCH_GENRES_WITH_BOOKS_FAILURE,
		};
		expect(fetchGenresWithBooksFailure()).toEqual(expectedAction);
	});
});

export {};

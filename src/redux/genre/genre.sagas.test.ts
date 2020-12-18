import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import createSagaMiddleware, { runSaga } from "redux-saga";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { fetchGenresWithBooks } from "./genre.sagas";
import {
	fetchGenresWithBooksFailure,
	fetchGenresWithBooksSuccess,
} from "./genre.actions";
import { MOCKED_GENRES_WITH_BOOKS } from "./genre.mocks";
import { initialState } from "./genre.reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [sagaMiddleware];

const mockStore = configureStore(middlewares);

describe("Genre Sagas", () => {
	describe("Fetch Genres With Books", () => {
		let axiosMock: MockAdapter;
		let store: MockStoreEnhanced<unknown, {}>;

		beforeEach(() => {
			axiosMock = new MockAdapter(axios);
			store = mockStore(initialState);
		});

		afterEach(() => {
			axiosMock.resetHandlers();
		});

		it("should succesfully get the genres with books and handle them", async () => {
			axiosMock
				.onGet(`${process.env.REACT_APP_API_URL}/genres?withBooks=true`)
				.reply(200, MOCKED_GENRES_WITH_BOOKS);

			await runSaga(store, fetchGenresWithBooks as any).toPromise();

			expect(store.getActions()[0]).toEqual(
				fetchGenresWithBooksSuccess(MOCKED_GENRES_WITH_BOOKS)
			);
			expect(store.getActions()[0].payload).toEqual(MOCKED_GENRES_WITH_BOOKS);
		});
		it("should fail in get the genres with books and handle it", async () => {
			axiosMock
				.onGet(`${process.env.REACT_APP_API_URL}/genres?withBooks=true`)
				.reply(500);

			await runSaga(store, fetchGenresWithBooks as any).toPromise();

			expect(store.getActions()[0]).toEqual(fetchGenresWithBooksFailure());
		});
	});
});

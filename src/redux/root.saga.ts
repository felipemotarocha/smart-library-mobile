import { all, call } from "redux-saga/effects";
import { genreSagas } from "./genre/genre.sagas";

export function* rootSaga() {
	yield all([call(genreSagas)]);
}

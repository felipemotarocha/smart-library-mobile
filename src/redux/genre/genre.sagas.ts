import {takeLatest, all, call, put} from 'redux-saga/effects';
import axios from 'axios';

import {FETCH_GENRES_WITH_BOOKS_START} from './genre.actions.types';
import {
  fetchGenresWithBooksFailure,
  fetchGenresWithBooksSuccess,
} from './genre.actions';
import {GenreWithBooksPopulated} from '../../types/entities/genre.types';
import Config from 'react-native-config';

export function* fetchGenresWithBooks() {
  try {
    const {
      data: genresWithBooks,
    }: {data: GenreWithBooksPopulated[]} = yield axios.get(
      `${Config.API_URL}/genres?withBooks=true`,
    );

    yield put(fetchGenresWithBooksSuccess(genresWithBooks));
  } catch (err) {
    yield put(fetchGenresWithBooksFailure());
  }
}

function* onFetchGenresWithBooksStart() {
  yield takeLatest(FETCH_GENRES_WITH_BOOKS_START, fetchGenresWithBooks);
}

export function* genreSagas() {
  yield all([call(onFetchGenresWithBooksStart)]);
}

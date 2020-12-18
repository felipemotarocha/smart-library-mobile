import {GenreWithBooksPopulated} from '../../types/entities/genre.types';

export const FETCH_GENRES_WITH_BOOKS_START = 'FETCH_GENRES_WITH_BOOKS_START';
export const FETCH_GENRES_WITH_BOOKS_SUCCESS =
  'FETCH_GENRES_WITH_BOOKS_SUCCESS';
export const FETCH_GENRES_WITH_BOOKS_FAILURE =
  'FETCH_GENRES_WITH_BOOKS_FAILURE';

interface FetchGenresWithBooksStartAction {
  type: typeof FETCH_GENRES_WITH_BOOKS_START;
}
interface FetchGenresWithBooksSuccessAction {
  type: typeof FETCH_GENRES_WITH_BOOKS_SUCCESS;
  payload: GenreWithBooksPopulated[];
}
interface FetchGenresWithBooksFailureAction {
  type: typeof FETCH_GENRES_WITH_BOOKS_FAILURE;
}

export type GenreActionsTypes =
  | FetchGenresWithBooksStartAction
  | FetchGenresWithBooksSuccessAction
  | FetchGenresWithBooksFailureAction;

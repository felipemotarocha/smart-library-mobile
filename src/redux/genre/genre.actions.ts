import {GenreWithBooksPopulated} from '../../types/entities/genre.types';

import {
  FETCH_GENRES_WITH_BOOKS_FAILURE,
  FETCH_GENRES_WITH_BOOKS_START,
  FETCH_GENRES_WITH_BOOKS_SUCCESS,
  GenreActionsTypes,
} from './genre.actions.types';

export const fetchGenresWithBooksStart = (): GenreActionsTypes => {
  return {
    type: FETCH_GENRES_WITH_BOOKS_START,
  };
};

export const fetchGenresWithBooksSuccess = (
  genresWithBooks: GenreWithBooksPopulated[],
): GenreActionsTypes => {
  return {
    type: FETCH_GENRES_WITH_BOOKS_SUCCESS,
    payload: genresWithBooks,
  };
};

export const fetchGenresWithBooksFailure = (): GenreActionsTypes => {
  return {
    type: FETCH_GENRES_WITH_BOOKS_FAILURE,
  };
};

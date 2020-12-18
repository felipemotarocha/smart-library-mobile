import {Genre, GenreWithBooksPopulated} from '../../types/entities/genre.types';

export interface GenreState {
  genres: Genre[] | null;
  genresWithBooks: GenreWithBooksPopulated[] | null;
  loading: boolean;
}

import { Author } from "./author.types";
import { Genre } from "./genre.types";

export type Book = {
	__v?: string;
	_id: string;
	title: string;
	coverImageUrl: string;
	author: Author;
	genre: Genre;
};

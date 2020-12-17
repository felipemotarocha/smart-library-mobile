import { Book } from "./book.types";

export type Genre = {
	__v?: string;
	_id: string;
	name: string;
	displayName: string;
};

export type GenreWithBooksPopulated = {
	__v?: string;
	_id: string;
	name: string;
	displayName: string;
	books: Book[];
};

import { Book } from "./book.types";

export type Author = {
	__v?: string;
	_id: string;
	name: string;
};

export type AuthorWithBooksPopulated = {
	__v?: string;
	_id: string;
	name: string;
	books: Book[];
};

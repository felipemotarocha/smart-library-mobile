import * as React from 'react';

import {Book} from '../../types/book.types';
import {BookItemImage, BookItemTouchableOpacity} from './book-item.styles';

export interface BookItemProps {
  book: Book;
}

const BookItem: React.FunctionComponent<BookItemProps> = ({
  book: {coverImageUrl},
}) => {
  return (
    <BookItemTouchableOpacity>
      <BookItemImage source={{uri: coverImageUrl}} />
    </BookItemTouchableOpacity>
  );
};

export default BookItem;

import * as React from 'react';
import {GestureResponderEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Book} from '../../types/book.types';
import {BookItemImage, BookItemTouchableOpacity} from './book-item.styles';

export interface BookItemProps {
  book: Book;
}

const BookItem: React.FunctionComponent<BookItemProps> = ({
  book: {coverImageUrl, _id},
}) => {
  const navigation = useNavigation();

  const handleNavigateToTheBookPage = (event: GestureResponderEvent) => {
    navigation.navigate('BookDetails', {bookId: _id});
  };

  return (
    <BookItemTouchableOpacity onPress={handleNavigateToTheBookPage}>
      <BookItemImage source={{uri: coverImageUrl}} />
    </BookItemTouchableOpacity>
  );
};

export default BookItem;

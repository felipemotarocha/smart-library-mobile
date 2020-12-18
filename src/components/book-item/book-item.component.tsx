import * as React from 'react';
import {GestureResponderEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BookItemImage, BookItemTouchableOpacity} from './book-item.styles';
import {Book} from '../../types/entities/book.types';
import {HomeScreenNavigationProp} from '../../types/navigation/navigation.types';

export interface BookItemProps {
  book: Book;
}

const BookItem: React.FunctionComponent<BookItemProps> = ({
  book: {_id, title, coverImageUrl},
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigateToTheBookPage = (_event: GestureResponderEvent) => {
    navigation.navigate('BookDetails', {bookId: _id, bookTitle: title});
  };

  return (
    <BookItemTouchableOpacity onPress={handleNavigateToTheBookPage}>
      <BookItemImage source={{uri: coverImageUrl}} />
    </BookItemTouchableOpacity>
  );
};

export default BookItem;

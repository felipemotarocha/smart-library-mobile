import * as React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Book} from '../../types/book.types';

export interface BookItemProps {
  book: Book;
}

const BookItem: React.FunctionComponent<BookItemProps> = ({
  book: {coverImageUrl},
}) => {
  return (
    <TouchableOpacity style={styles.bookItemTouchableOpacity}>
      <Image
        style={styles.bookItemImageBackground}
        source={{uri: coverImageUrl}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookItemTouchableOpacity: {
    height: 150,
    width: 100,
    marginHorizontal: 4,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  bookItemImageBackground: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
});

export default BookItem;

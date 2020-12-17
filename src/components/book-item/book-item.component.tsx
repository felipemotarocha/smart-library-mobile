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

const BookItem: React.FunctionComponent<BookItemProps> = ({book}) => {
  return (
    <TouchableOpacity style={styles.bookItemTouchableOpacity}>
      <View style={styles.bookItemContainer}>
        <Image
          style={styles.bookItemImageBackground}
          source={{uri: book.coverImageUrl}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookItemTouchableOpacity: {
    height: 150,
    width: 100,
    marginHorizontal: 4,
    borderRadius: 5,
  },
  bookItemContainer: {
    borderRadius: 5,
    elevation: 10,
  },
  bookItemImageBackground: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
});

export default BookItem;

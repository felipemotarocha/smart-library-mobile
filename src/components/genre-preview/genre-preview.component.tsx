import * as React from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Book} from '../../types/book.types';
import {GenreWithBooksPopulated} from '../../types/genre.types';
import BookItem from '../book-item/book-item.component';

export interface GenrePreviewProps {
  genreWithBooks: GenreWithBooksPopulated;
}

const GenrePreview: React.FunctionComponent<GenrePreviewProps> = ({
  genreWithBooks,
}) => {
  const renderBookItem: ListRenderItem<Book> = ({item}) => {
    return <BookItem book={item} />;
  };
  return (
    <View style={styles.genrePreviewContainer}>
      {genreWithBooks && (
        <FlatList
          data={genreWithBooks.books}
          renderItem={renderBookItem}
          horizontal
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  genrePreviewContainer: {
    marginVertical: 7,
  },
});

export default GenrePreview;

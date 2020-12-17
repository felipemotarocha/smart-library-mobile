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
  genreWithBooks: {displayName, books},
}) => {
  const renderBookItem: ListRenderItem<Book> = ({item}) => {
    return <BookItem key={item._id} book={item} />;
  };

  return (
    <View style={styles.genrePreviewContainer}>
      <Text style={styles.genrePreviewDisplayName}>{displayName}</Text>
      {books && (
        <FlatList data={books} renderItem={renderBookItem} horizontal />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  genrePreviewContainer: {
    marginVertical: 7,
  },
  genrePreviewDisplayName: {
    marginHorizontal: 4,
    marginBottom: 4,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default GenrePreview;

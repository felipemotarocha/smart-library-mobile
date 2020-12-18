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
import {
  GenrePreviewContainer,
  GenrePreviewDisplayName,
} from './genre-preview.styles';

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
    <GenrePreviewContainer>
      <GenrePreviewDisplayName>{displayName}</GenrePreviewDisplayName>
      {books && (
        <FlatList data={books} renderItem={renderBookItem} horizontal />
      )}
    </GenrePreviewContainer>
  );
};

export default GenrePreview;

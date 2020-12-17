import * as React from 'react';
import axios from 'axios';
import {Button, FlatList, Text, View} from 'react-native';
import Config from 'react-native-config';
import {GenreWithBooksPopulated} from '../../types/genre.types';

export interface GenrePreviewProps {
  genreWithBooks: GenreWithBooksPopulated;
}

const GenrePreview: React.FunctionComponent<GenrePreviewProps> = ({
  genreWithBooks,
}) => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default GenrePreview;

import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import {GenreWithBooksPopulated} from './src/types/genre.types';
import GenrePreview from './src/components/genre-preview/genre-preview.component';

const App: React.FunctionComponent = () => {
  const [genresWithBooks, setGenresWithBooks] = React.useState<
    GenreWithBooksPopulated[]
  >();

  useEffect(() => {
    const fetchGenresWithBooks = async () => {
      try {
        const {data} = await axios.get(
          `http://${Config.API_URL}/genres?withBooks=true`,
        );
        setGenresWithBooks(data);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchGenresWithBooks();
  }, []);

  const renderGenreWithBooksItem: ListRenderItem<GenreWithBooksPopulated> = ({
    item,
  }) => {
    return <GenrePreview key={item._id} genreWithBooks={item} />;
  };

  return (
    <View style={styles.appContainer}>
      {genresWithBooks &&
        genresWithBooks.map((genreWithBooks) => (
          <GenrePreview
            key={genreWithBooks._id}
            genreWithBooks={genreWithBooks}
          />
        ))}
      {genresWithBooks && (
        <FlatList
          data={genresWithBooks}
          renderItem={renderGenreWithBooksItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;

import axios from 'axios';
import * as React from 'react';
import {ListRenderItem, View} from 'react-native';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';

import GenrePreview from '../../components/genre-preview/genre-preview.component';
import {GenreWithBooksPopulated} from '../../types/genre.types';
import {HomeScreenContainer} from './home.screen.styles';

export interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const [genresWithBooks, setGenresWithBooks] = React.useState<
    GenreWithBooksPopulated[]
  >();

  React.useEffect(() => {
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
    <HomeScreenContainer>
      {genresWithBooks && (
        <FlatList
          data={genresWithBooks}
          renderItem={renderGenreWithBooksItem}
        />
      )}
    </HomeScreenContainer>
  );
};

export default HomeScreen;

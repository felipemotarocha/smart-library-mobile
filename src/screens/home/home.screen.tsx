import axios from 'axios';
import * as React from 'react';
import {ListRenderItem} from 'react-native';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import GenrePreview from '../../components/genre-preview/genre-preview.component';
import {fetchGenresWithBooksStart} from '../../redux/genre/genre.actions';
import {RootState} from '../../redux/root.reducer';
import {GenreWithBooksPopulated} from '../../types/entities/genre.types';

import {HomeScreenContainer} from './home.screen.styles';

export interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const selectGenreReducer = (state: RootState) => state.genre;
  const {genresWithBooks} = useSelector(selectGenreReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGenresWithBooksStart());
  }, [dispatch]);

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

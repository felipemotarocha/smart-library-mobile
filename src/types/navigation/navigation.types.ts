import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  BookDetails: {bookId: string; bookTitle: string};
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type BookDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BookDetails'
>;

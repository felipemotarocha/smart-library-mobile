import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import HomeScreen from './src/screens/home/home.screen';
import BookDetailsScreen from './src/screens/book-details/book-details.screen';
import {RootStackParamList} from './src/types/navigation/navigation.types';
import store from './src/redux/store';

const App: React.FunctionComponent = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Smart Library'}}
          />
          <Stack.Screen
            name="BookDetails"
            component={BookDetailsScreen}
            options={({route}) => ({
              title: route.params.bookTitle,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/navigation/Navigate';
import { Provider as PaperProvider } from 'react-native-paper';


export class App extends Component {
  render() {
    return (
      <PaperProvider>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
      </PaperProvider>
    );
  }
}

export default App;

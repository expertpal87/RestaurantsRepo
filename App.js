
//=-----------react component------//
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';

//=----------- component------//
import Navigation from './src/Navigation';

//=----------- main component------//
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

//=----------- export default------//
export default App;

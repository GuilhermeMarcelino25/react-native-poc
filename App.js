/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const width = Dimensions.get('screen').width;
  return (
<View>
    <Text>Guilherme</Text>
    <Image source={require('./alura.jpg')} style={{width:width, height:width}}/>
</View>
  );
};

const styles = StyleSheet.create({

});

export default App;

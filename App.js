/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment, Component} from 'react';
import Post from './component/Post';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component {

  constructor(){
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(resposta => resposta.json())
        .then(json => this.setState({fotos: json}));
}
  

 
  render() {
    const width = Dimensions.get('screen').width;
      return (
        <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => 
        <Post foto={item}/>
        }
      />
      );
  }
};

const styles = StyleSheet.create({

  container: {
    marginTop: 20
  }

});

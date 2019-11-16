import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';


const width = Dimensions.get('screen').width;

export default class Post extends Component {

  constructor(props){
    super(props);
    this.state = {
      foto: {...this.props.foto,likers:[{},{}]}
    } 
  }

  mostrarIcone(likeada){
    return likeada ? require('../resource/img/s2-checked.png') : require('../resource/img/s2.png');
  }

  interagirFoto(){
    const fotoAtualizada = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada
    }

    this.setState({foto: fotoAtualizada})
  }

  mostrarLikers(likers){

    if(likers.length <= 0)
    return;

    return (
      <Text>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

    render() {
      const {foto} = this.state;

     return (
                <View>
                <View style= {styles.cabecalho}>  
                <Image source={{uri: foto.urlPerfil}} style={styles.fotoDePerfil} />
                <Text>{foto.loginUsuario}</Text>
                </View>    
                <Image source={{uri: foto.urlFoto}}  style={styles.foto} />
                
                <View style= {styles.rodape}>
                <TouchableOpacity onPress={this.interagirFoto.bind(this)}>
                <Image style= {styles.botaoDeLike} 
                    source={this.mostrarIcone(foto.likeada)}/>
                </TouchableOpacity>
                {this.mostrarLikers(foto.likers)}  
                </View>
                             
                </View>
        );
    }
  }


const styles = StyleSheet.create({

    cabecalho:{
      margin: 10, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
  
    fotoDePerfil:{
      marginRight: 10, 
      borderRadius: 20, 
      width:40, 
      height:40
    },
  
    foto:{
      width:width, 
      height:width
    },

    botaoDeLike:{
      marginBottom:10,
      width:40,
      height:40
    },

    rodape:{
      margin: 10
    }
  
  });
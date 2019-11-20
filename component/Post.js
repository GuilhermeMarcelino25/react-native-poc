import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';


const width = Dimensions.get('screen').width;

export default class Post extends Component {

  constructor(props){
    super(props);
    this.state = {
      foto: {...this.props.foto, likers: [{login: 'Joao'}]}
    } 
  }

  mostrarIcone(likeada){
    return likeada ? require('../resource/img/s2-checked.png') : require('../resource/img/s2.png');
  }


  interagirFoto(){
    

    let novaLista = [];

     if(!this.state.foto.likeada){
      novaLista = [...this.state.foto.likers , {login: 'Guilherme'}];
    } else{
      novaLista = this.state.foto.likers.filter(liker => {
        return liker.login !== 'Guilherme';
      })
    } 
 
    const fotoAtualizada = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada,
      likers: novaLista,
    }
    this.setState({foto: fotoAtualizada})
   
  }

  mostrarLikers(likers){
    if(likers.length <= 0)
    return;

    return (
      <Text style= {styles.like} >{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

  exibeLegenda(foto){
    if(foto.comentario === ''){
      return;
    }

    return(
                      <View style= {styles.comentario}>
                          <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>  
                          <Text>{foto.comentario}</Text>
                        </View>
    );

  }

  comentar(){
    if(this.state.valorComentario === '')
                return;

            const novaLista = [...this.state.foto.comentarios, {
                id: this.state.valorComentario,
                login: 'Guilherme',
                texto: this.state.valorComentario,
            }];

            const fotoAtualizada = {
                ...this.state.foto,
                comentarios: novaLista,
            }

            this.setState({foto: fotoAtualizada});
            this.inputComentario.clear();
   
    }

    render() {
      const {foto} = this.state;

     return (
                <View key={foto.id}  >
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
                      {this.exibeLegenda(foto)}
                      {foto.comentarios.map(comentario =>
                      <View key={comentario.id} style={styles.comentarios}>
                      <Text style ={styles.tituloComentario}>{comentario.login}</Text>
                      <Text>{comentario.texto}</Text>
                      </View>
                      )}
                      <View style={styles.comentarioAmigos}>
                      <TextInput style={styles.input} placeholder = "Digite um comentario" 
                      ref={input => this.inputComentario = input}
                      onChangeText={texto => this.setState({valorComentario: texto})}/>
                      <TouchableOpacity onPress={this.comentar.bind(this)}>
                      <Image source={require('../resource/img/send.png')} style={styles.botaoComentario}/>
                      </TouchableOpacity>
                      </View>
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
    },
    like:{
      fontWeight: 'bold'
    },

    comentario: {
      flexDirection: 'row'
    },

    tituloComentario :{
      fontWeight: 'bold',
      marginRight: 5
    },

    comentarios:{
      flexDirection: 'row',
      alignItems: 'center'
    },

    comentarioAmigos: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
    },

    input:{
      flex: 1,
      height: 40
    },

    botaoComentario:{
      width:30,
      height:30
    }
  
  });
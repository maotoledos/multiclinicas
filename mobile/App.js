import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,FlatList,StatusBar, Button, Alert} from 'react-native';
import axios from 'axios';
import { queryBuilder } from './setup/helpers';

export default class App extends Component<Props> {

  state ={
    data:[]
  }

  fetchData= async()=>{

    axios.post("http://192.168.1.46:3000", queryBuilder({

        type: 'query',
        operation: 'inventarios',
        fields: ['id', 'nombre', 'cantidad', 'lote', 'sucursaleId{id, nombre}','medicinaId{id, nombre,unidades,marca}'
        ]
      }))
      .then((response) => {
        let respuesta = response.data.data.inventarios;
        
        this.setState({data: respuesta});
        
      })
      .catch((error) => {
        console.log(error)
      })
  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
        <Text></Text>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
       <Text>CLINICAS MEDICAS</Text>
      
       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>
          Medicina: {item['medicinaId'].id}
          </Text>
          <Text style={{color:'#fff'}}>Marca: {item['medicinaId'].marca}</Text>
          <Text>Unidades: {item['medicinaId'].unidades}</Text>
          <Text style={{color:'#fff', fontWeight:'bold'}}>Inventario de: {item['sucursaleId'].nombre}</Text>
          <Text style={{color:'#fff'}}>Cantidad de Existencia: {item.cantidad}</Text>
          <Text>Descripcion: {item.nombre}</Text>
          <Text style={{color:'#fff'}}>Lote: {item.lote}</Text>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
         </View>

       }

       />
       <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
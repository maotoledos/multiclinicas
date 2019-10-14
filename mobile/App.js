import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,FlatList,StatusBar, Button} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { queryBuilder } from './setup/helpers';
export default class App extends Component<Props> {
  

  state ={
    data:[],
    visibleLogin: false
  }
  showLoginModal = () => {
    this.setState({
        visibleLogin: true,
    });
    
};

  constructor(props) {
    super(props)
    
    this.state = {
      lastRefresh: Date(Date.now()).toString(),
    }
    
    this.refreshScreen = this.refreshScreen.bind(this)
  }
  
  refreshScreen() {
    //this.setState({ lastRefresh: Date(Date.now()).toString() })
    this.fetchData()
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
        console.log(respuesta)
        
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
         <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Button onPress={this.refreshScreen} title="" />
        <Button onPress={this.refreshScreen} title="Refresh Screen" />
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
          source={{uri: 'https://images2.revistafama.com/SGkcBjuXI-4eJVyxC5FeCRpyUrs=/958x596/uploads/media/2019/05/23/pastillas-anticonceptivas-de-emergencia.jfif'}}
        />
       
         </View>
         

       }

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
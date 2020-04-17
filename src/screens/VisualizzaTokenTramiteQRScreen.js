import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

const VisualizzaTokenTramiteQRScreen = ()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questa è la bici che hai scannerizzato</Text>
      <Image />
      <Text>Marca: </Text>
      <Text>Modello: </Text>
      <Text>Telaio: </Text>
      <Text>Tipologia Bicicletta: </Text>
      <Text>Data D'Acquisto: </Text>
      <Text>Segni Particolari: </Text>
      <Text>Bici Id: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    flex:1,
  },
  title:{
    marginTop:20,
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    borderWidth:3,
    textAlign:'center',
  }
});

export default VisualizzaTokenTramiteQRScreen;

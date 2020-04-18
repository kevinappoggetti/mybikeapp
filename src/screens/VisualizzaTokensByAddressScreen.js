import React from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import BiciclettaCard from '../components/BiciclettaCard';

const VisualizzaTokensByAddressScreen = ({navigation})=>{
  const walletAddress = navigation.getParam('walletAddress');
  const idBicicletta=Math.floor(Math.random()*100)+1;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Autenticazione',{walletAddress:walletAddress})}>
        <Text>Prova autenticazione </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    flex:1,
    alignItems:'center'
  },
  title:{
    marginTop:20,
    color:'white',
    fontSize:24,
    alignSelf:'center',
    fontWeight:'bold',
  },
  subtitle:{
    marginTop:10,
    color:'white',
    fontSize:18,
    alignSelf:'center',
    fontWeight:'bold',
  }
});

export default VisualizzaTokensByAddressScreen;

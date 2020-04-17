import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const AddressScreen = ({navigation})=>{
  const [walletAddress,setWalletAddress]=useState('');
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Inserisci un Ethereum Address</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Address"
        value={walletAddress}
        onChangeText={newAddress => setWalletAddress(newAddress)}
        style={styles.inputStyle}
      />
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('VisualizzaTokensByAddress',{walletAddress:walletAddress})}>
        <Text style={styles.textbutton}>Avanti!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    flex:1
  },
  title:{
    marginTop:185,
    color:'white',
    fontSize:24,
    alignSelf:'center',
    fontWeight:'bold',
  },
  inputStyle:{
    fontSize:13,
    paddingLeft:10,
    width:320,
    height:35,
    borderWidth:2,
    borderRadius:25,
    borderColor:'#657786',
    backgroundColor:'#FFFFFF',
    alignSelf:'center',
    marginTop:40
  },
  button:{
    width:350,
    height:45,
    borderRadius:25,
    backgroundColor:'white',
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:3,
    borderColor:'#657786',
    marginVertical:70
  },
  textbutton:{
    color:'#657786',
    fontSize:16,
    textAlign:'center'
  }
});

export default AddressScreen;

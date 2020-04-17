import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation})=>{
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('RegistrazioneUtente')}>
        <Text style={styles.text}>Registra la tua bicicletta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('Scan')}>
        <Text style={styles.text}>Scannerizza una Bicicletta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={()=>navigation.navigate('Address')}>
        <Text style={styles.text}>Visualizza i Token di un address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button4} onPress={()=>navigation.navigate('ChiSiamo')}>
        <Text style={styles.chisiamo}>Scopri gli altri prodotti di Innovativa Blockchain</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1
  },
  button1:{
    width:350,
    height:45,
    borderRadius:25,
    backgroundColor:'white',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'#657786',
    marginTop:200
  },
  button2:{
    width:350,
    height:45,
    borderRadius:25,
    backgroundColor:'white',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'#657786',
    marginVertical:20
  },
  button3:{
    width:350,
    height:45,
    borderRadius:25,
    backgroundColor:'white',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'#657786',
    marginBottom:200
  },
  button4:{
    marginBottom:50
  },
  chisiamo:{
    textDecorationLine: 'underline'
  },
  text:{
    color:'#657786',
    fontSize:16,
    textAlign:'center'
  }
});

export default HomeScreen;

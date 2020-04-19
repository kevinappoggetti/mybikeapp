import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const AddressScreen = ({navigation})=>{
  const [walletAddress,setWalletAddress]=useState('');
  let flag=false;
  const [errore, setErrore] = useState('');

  const isEthereumAddress = (walletAddress) => {
    let stringControlIfHexadecimal = false;
    const walletTruncated = walletAddress.substr(1).substr(1);
    var re = /[0-9A-Fa-f]{40}/g;
    if(re.test(walletTruncated)) {
      stringControlIfHexadecimal=true;
    }
    console.log(walletTruncated);
    if(walletAddress.length==42 && walletAddress.startsWith('0x') && stringControlIfHexadecimal){
      flag=true;
    } else{
      setErrore('Address non valido!');
    }
  }

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
    {
      errore!=''?
      <View style={styles.containerErrore}>
        <MaterialIcons style={styles.icon} name="error-outline" />
        <Text style={styles.text}>{errore}</Text>
      </View>: null
    }


    <TouchableOpacity style={styles.button} onPress={()=>{
      isEthereumAddress(walletAddress);
      if(flag){
        navigation.navigate('VisualizzaTokensByAddress',{walletAddress:walletAddress})
      }
    }
  }
  >
    <Text style={styles.textbutton}>Visualizza i Token dell'Address</Text>
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
    fontSize:12,
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
    marginVertical:30
  },
  textbutton:{
    color:'#657786',
    fontSize:16,
    textAlign:'center'
  },
  containerErrore:{
    borderColor:'#657786',
    borderWidth: 5,
    width:200,
    alignSelf:'center',
    marginTop:20,
    flexDirection:'row',
    borderRadius: 10
  },
  text:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    paddingLeft:10,
    paddingTop:3
  },
  icon:{
    fontSize:30
  }
});

export default AddressScreen;

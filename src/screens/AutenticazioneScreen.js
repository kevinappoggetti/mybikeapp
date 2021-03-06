import React,{useState, useContext} from 'react'
import {View, Text, Button,TouchableOpacity, StyleSheet} from 'react-native';
import TextAndInput from '../components/TextAndInput';
import {Context} from '../context/DBContext';
import {MaterialIcons} from '@expo/vector-icons'

const AutenticazioneScreen = ({navigation})=>{
  const {state, autenticazione} = useContext(Context);
  const walletAddress = navigation.getParam('walletAddress');
  const [password,setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inserisci la password del wallet</Text>
      <TextAndInput testo="Password" variabile={password} modificaVariabile={setPassword}/>

      {state.errorMessage!='' ?
      <View style={styles.errorContainer}>
        <MaterialIcons style={styles.icon} name='error-outline' />
        <Text style={styles.textErrore}>{state.errorMessage}</Text>
      </View>
      :null
    }

      <TouchableOpacity style={styles.button} onPress={()=>{
        autenticazione({walletAddress, password});
        if(state.isSignedIn==true){
          navigation.navigate('ModificaBicicletta');
        }
      }}>
        <Text style={styles.textbutton}>Avanti!</Text>
      </TouchableOpacity>
      <Button title="Modifica" onPress={()=>navigation.navigate('ModificaBicicletta')}/>
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
    marginTop:25,
    color:'white',
    fontSize:25,
    alignSelf:'center',
    fontWeight:'bold'
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
  },
  errorContainer:{
    borderColor:'#657786',
    borderWidth: 5,
    width:200,
    alignSelf:'center',
    marginTop:20,
    flexDirection:'row',
    borderRadius: 10,
  },
  icon:{
    fontSize:30
  },
  textErrore:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    paddingLeft:10,
    paddingTop:3
  }
}
);

export default AutenticazioneScreen;

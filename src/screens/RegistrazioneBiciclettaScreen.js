import React,{useState} from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TextAndInput from '../components/TextAndInput';

const RegistrazioneBiciclettaScreen = ({navigation})=>{
  const nome = navigation.getParam('nome');
  const cognome = navigation.getParam('cognome');
  const dataDiNascita = navigation.getParam('dataDiNascita');
  const citta = navigation.getParam('citta');
  const indirizzo = navigation.getParam('indirizzo');
  const cap = navigation.getParam('cap');
  const walletAddress = navigation.getParam('walletAddress');
  const [marca,setMarca] = useState('');
  const [modello,setModello] = useState('');
  const [telaio, setTelaio] = useState('');
  const [tipologiaBicicletta, setTipologiaBicicletta]= useState('');
  const [fotoBicicletta, setFotoBicicletta] = useState('');
  const [dataDAcquisto, setDataDAcquisto] = useState('');
  const [fotoDataDAcquisto, setFotoDataDAcquisto] = useState('');
  const [segniParticolari, setSegniParticolari] = useState('');
  const [fotoSegniParticolari, setFotoSegniParticolari] = useState('');
  const [idBicicletta, setIdBicicletta] = useState('');
  const [password, setPassword]=useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrazione Bicicletta</Text>
      <TextAndInput testo="Marca" variabile={marca} modificaVariabile={setMarca}/>
      <TextAndInput testo="Modello" variabile={modello} modificaVariabile={setModello}/>
      <TextAndInput testo="Telaio" variabile={telaio} modificaVariabile={setTelaio}/>
      <TextAndInput testo="Tipo Bicicletta" variabile={tipologiaBicicletta} modificaVariabile={setTipologiaBicicletta}/>
      <TextAndInput testo="Foto Bicicletta" variabile={fotoBicicletta} modificaVariabile={setFotoBicicletta}/>
      <TextAndInput testo="Data D'Acquisto" variabile={dataDAcquisto} modificaVariabile={setDataDAcquisto}/>
      <TextAndInput testo="Foto Data D'acquisto" variabile={fotoDataDAcquisto} modificaVariabile={setFotoDataDAcquisto}/>
      <TextAndInput testo="Segni Particolari" variabile={segniParticolari} modificaVariabile={setSegniParticolari}/>
      <TextAndInput testo="Foto Segni Particolari" variabile={fotoSegniParticolari} modificaVariabile={setFotoSegniParticolari}/>
      <TextAndInput testo="Id Bicicletta" variabile={idBicicletta} modificaVariabile={setIdBicicletta}/>
      <TextAndInput testo="Password" variabile={password} modificaVariabile={setPassword}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>Registra la tua bicicletta!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    alignItems:'flex-end',
    paddingRight:20,
    flex:1
  },
  title:{
    marginTop:25,
    color:'white',
    fontSize:28,
    alignSelf:'center',
    fontWeight:'bold'
  },
  button:{
    width:350,
    height:45,
    borderRadius:25,
    backgroundColor:'white',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'#657786',
  },
  textbutton:{
    color:'#657786',
    fontSize:16,
    textAlign:'center'
  }
});

export default RegistrazioneBiciclettaScreen;

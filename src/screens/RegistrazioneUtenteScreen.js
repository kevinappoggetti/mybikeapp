import React, {useState,useContext} from 'react'
import {View, Text, TextInput, FlatList,ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import TextAndInput from '../components/TextAndInput';
import {Context} from '../context/DBContext';

const RegistrazioneUtenteScreen = ({navigation})=>{
  const {state, verificautente} = useContext(Context);
  const [nome, setNome]=useState('');
  const [cognome, setCognome]=useState('');
  const [dataDiNascita, setDataDiNascita]=useState('');
  const [citta, setCitta]=useState('');
  const [indirizzo, setIndirizzo]=useState('');
  const [cap, setCap]=useState('');
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress]=useState('');
  const data=[
    {testo:"Nome", variabile:nome, modificaVariabile:setNome, id:'1'},
    {testo:"Cognome", variabile:cognome, modificaVariabile:setCognome, id:'2'},
    {testo:"Data Di Nascita", variabile:dataDiNascita, modificaVariabile:setDataDiNascita, id:'3'},
    {testo:"Città", variabile:citta, modificaVariabile:setCitta, id:'4'},
    {testo:"Indirizzo", variabile:indirizzo, modificaVariabile:setIndirizzo, id:'5'},
    {testo:"Cap", variabile:cap, modificaVariabile:setCap, id:'6'},
    {testo:"Email", variabile:email, modificaVariabile:setEmail, id:'7'},
    {testo:"Wallet Address", variabile:walletAddress, modificaVariabile:setWalletAddress, id:'8'},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inserisci i tuoi dati personali</Text>
      <ScrollView>
      <FlatList
        keyboardDismissMode="none"
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
            <TextAndInput style={styles.list} stile={'10'} testo={item.testo} variabile={item.variabile} modificaVariabile={item.modificaVariabile} />
          )
        }
        ListFooterComponent={()=><TouchableOpacity
          style={styles.button}
          onPress={()=>{
            verificautente({walletAddress});
            navigation.navigate('RegistrazioneBicicletta',{
              nome:nome,
              cognome:cognome,
              dataDiNascita:dataDiNascita,
              citta:citta,
              indirizzo:indirizzo,
              cap:cap,
              email:email,
              walletAddress:walletAddress,
          }
        )}}>
          <Text style={styles.textbutton}>Continua la registrazione</Text>
        </TouchableOpacity>}
      />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    alignItems:'flex-end',
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
  list:{
    flex: 1,
     justifyContent: 'center',
  }
});

export default RegistrazioneUtenteScreen;

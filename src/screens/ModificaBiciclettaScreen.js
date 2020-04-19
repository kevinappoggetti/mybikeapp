import React, {useState,useContext} from 'react'
import {View, Text, TouchableOpacity,ScrollView, FlatList, StyleSheet} from 'react-native';
import {Context} from '../context/DBContext';
import TextAndInput from '../components/TextAndInput';

const ModificaBiciclettaScreen = ({navigation})=>{
  const [marca,setMarca] = useState('');
  const [modello,setModello] = useState('');
  const [telaio, setTelaio] = useState('');
  const [tipologiaBicicletta, setTipologiaBicicletta]= useState('');
  const [fotoBicicletta, setFotoBicicletta] = useState('');
  const [dataDAcquisto, setDataDAcquisto] = useState('');
  const [fotoDataDAcquisto, setFotoDataDAcquisto] = useState('');
  const [segniParticolari, setSegniParticolari] = useState('');
  const [fotoSegniParticolari, setFotoSegniParticolari] = useState('');
  const data = [
    {testo:"Marca", variabile:marca, modificaVariabile:setMarca, id:'1'},
    {testo:"Modello", variabile:modello, modificaVariabile:setModello, id:'2'},
    {testo:"Telaio", variabile:telaio, modificaVariabile:setTelaio, id:'3'},
    {testo:"Tipologia Bicicletta", variabile:tipologiaBicicletta, modificaVariabile:setTipologiaBicicletta, id:'4'},
    {testo:"Foto Bicicletta", variabile:fotoBicicletta, modificaVariabile:setFotoBicicletta, id:'5'},
    {testo:"Data D'Acquisto", variabile:dataDAcquisto, modificaVariabile:setDataDAcquisto, id:'6'},
    {testo:"Foto Data D'Acquisto", variabile:fotoDataDAcquisto, modificaVariabile:setFotoDataDAcquisto, id:'7'},
    {testo:"Segni Particolari", variabile:segniParticolari, modificaVariabile:setSegniParticolari, id:'8'},
    {testo:"Foto Segni Particolari", variabile:fotoSegniParticolari, modificaVariabile:setFotoSegniParticolari, id:'9'},
  ]
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Modifica Bicicletta</Text>
        <ScrollView>
          <FlatList
            data={data}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <TextAndInput style={styles.list} testo={item.testo} variabile={item.variabile} modificaVariabile={item.modificaVariabile} />
              )
            }
            ListFooterComponent={
              <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.textbutton}>Attiva lo Smart Contract!</Text>
              </TouchableOpacity>
            }
          />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    alignItems:'flex-end',
    // paddingRight:10,
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
    marginTop:50,
    marginBottom:20
  },
  textbutton:{
    color:'#657786',
    fontSize:16,
    textAlign:'center',
  }
});

export default ModificaBiciclettaScreen;

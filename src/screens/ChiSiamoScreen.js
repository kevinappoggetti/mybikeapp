import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TextAndInput from '../components/TextAndInput';

const ChiSiamoScreen = ()=>{

  const [nome, setNome]=useState('');
  const [cognome, setCognome]=useState('');
  const [dataDiNascita, setDataDiNascita]=useState('');
  const [citta, setCitta]=useState('');
  const [indirizzo, setIndirizzo]=useState('');
  const [cap, setCap]=useState('');
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress]=useState('');

  const data = [
    {testo:"Nome", variabile:nome, modificaVariabile:setNome, id:'1'},
    {testo:"Cognome", variabile:cognome, modificaVariabile:setCognome,id:'2'}
  ];
  return(
    <View style={styles.container}>
    <Text>Ciao</Text>
      <FlatList
       style={styles.list}
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
            <TextAndInput testo={item.testo} variabile={item.variabile} modificaVariabile={item.modificaVariabile} />
          )
        }
      />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:'rgba(29,161,242,0.7)',
    flex:1
  },
  list:{
    borderWidth:3,
    borderColor:'red'
  }
});

export default ChiSiamoScreen;

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const BiciclettaCard = ({navigation}) => {
  return(
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Autenticazione')}>
        <View style={styles.container}>
          <Image style={styles.image} />
          <Text>Qui ci andrà la foto</Text>
        </View>
        <View style={styles.containerTesto}>
          <Text style={styles.text}>Marca: </Text>
          <Text></Text>
          <Text style={styles.text}>Modello:</Text>
          <Text></Text>
          <Text style={styles.text}>Telaio:</Text>
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderWidth:3,
    width:300,
    height:300,
    borderColor:'black'
  },
  image:{

    borderRadius:4,
    marginBottom:5
  },
  containerTesto:{
    width:300,
    height:100,
    borderWidth:3,
    borderColor:'black',
    marginVertical:10
  },
  text:{
    color:'#14171A',
    fontWeight:'bold',
    paddingRight:5,
    fontSize:14,
  }
});

export default BiciclettaCard;

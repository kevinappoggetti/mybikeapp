import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextAndInput = ({testo, variabile, modificaVariabile})=>{
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{testo}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={testo}
        value={variabile}
        onChangeText={newVariabile => modificaVariabile(newVariabile)}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  inputStyle:{
    fontSize:13,
    paddingLeft:10,
    width:250,
    height:35,
    borderWidth:2,
    borderRadius:25,
    borderColor:'#657786',
    backgroundColor:'#FFFFFF',

  },
  container:{
    flexDirection:'row',
    marginTop:25,
    paddingRight:8,

  },
  text:{
    color:'#14171A',
    fontWeight:'bold',
    paddingRight:5,
    alignSelf:'center',
    fontSize:14,
    textDecorationLine: 'underline'
  }
});

export default TextAndInput;

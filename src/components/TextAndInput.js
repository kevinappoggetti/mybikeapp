import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
//import DateTimePicker from '@react-native-community/datetimepicker';

const TextAndInput = ({testo, variabile, modificaVariabile, stile})=>{
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };
  //
  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  // };
  //
  // const showDatepicker = () => {
  //   showMode('date');
  // };
  //
  // const showTimepicker = () => {
  //   showMode('time');
  // };
  return(
    <View style={styles.container}>
      <Text style={[styles.text,{fontSize:11}]}>{testo}</Text>
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
    //fontSize:13,
    paddingLeft:10,
    width:260,
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
    justifyContent:'flex-end'
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

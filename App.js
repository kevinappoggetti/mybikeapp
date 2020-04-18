import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddressScreen from './src/screens/AddressScreen';
import AutenticazioneScreen from './src/screens/AutenticazioneScreen';
import HomeScreen from './src/screens/HomeScreen';
import ModificaBiciclettaScreen from './src/screens/ModificaBiciclettaScreen';
import RegistrazioneBiciclettaScreen from './src/screens/RegistrazioneBiciclettaScreen';
import RegistrazioneUtenteScreen from './src/screens/RegistrazioneUtenteScreen';
import VisualizzaTokenTramiteQRScreen from './src/screens/VisualizzaTokenTramiteQRScreen';
import VisualizzaTokensByAddressScreen from './src/screens/VisualizzaTokensByAddressScreen';
import TransitionScreen from './src/screens/TransitionScreen';
import ChiSiamoScreen from './src/screens/ChiSiamoScreen';
import ScanScreen from './src/screens/ScanScreen';
import {Provider} from './src/context/DBContext';

const navigator = createStackNavigator({
    Address: AddressScreen,
    Autenticazione: AutenticazioneScreen,
    ChiSiamo:ChiSiamoScreen,
    Home: HomeScreen,
    ModificaBicicletta: ModificaBiciclettaScreen,
    RegistrazioneBicicletta: RegistrazioneBiciclettaScreen,
    RegistrazioneUtente: RegistrazioneUtenteScreen,
    Scan:ScanScreen,
    Transition:TransitionScreen,
    VisualizzaTokenTramiteQR:VisualizzaTokenTramiteQRScreen,
    VisualizzaTokensByAddress:VisualizzaTokensByAddressScreen
  },{
    initialRouteName: 'Home',
    // defaultNavigationOptions: { //Customizza l'header
    //   title: 'Home - My Bike'
    //   //header:null
    // }
  }
);

const App = createAppContainer(navigator);
export default () =>{
  return (
    <Provider>
      <App />
    </Provider>
  )
}

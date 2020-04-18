import dataContext from './dataContext';
import collegamentoConDB from '../api/collegamentoConDB';

const authReducer = (state, action) =>{
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage:action.payload}; //Prendi l'array di oggetti e
      //sovrascrivi errorMessage con ciò che arriva da action.payload
    case 'verifica_login':
      return {...state, isSignedIn:action.payload};
    case 'update_utenteVerificato':
      return { ...state, utenteVerificato:action.payload};
    default:
      return state;
  }
};

const inserisciutente = (dispatch) =>{
  return async ({nome, cognome, dataDiNascita, citta, indirizzo, cap, email, walletAddress, password}) =>{
    try{
      const response = await collegamentoConDB.post('/inserisciutente',{nome, cognome, dataDiNascita, citta, indirizzo, cap, email, walletAddress, password});
    } catch(err){
      dispatch({type: 'add_error', payload:'Attenzione errore'})
    }
  }
}

const autenticazione = (dispatch)=>{
  return async ({walletAddress, password})=>{
    try{
      const response = await collegamentoConDB.post('/autenticazione',{walletAddress, password});
      console.log(response.data);
      if(response.data===true){
        dispatch({type:'verifica_login', payload:response.data})
      } else{
        dispatch({type:'add_error', payload:'login errato!'});
      }
    }catch(err){
      console.log("Sono qui");
      dispatch({type:'add_error', payload:'login errato!'});
    }
  }
}

const verificautente = (dispatch)=>{
  return async ({walletAddress})=>{
    try{
      const response = await collegamentoConDB.post('verificautente',{walletAddress});
      dispatch({type:'update_utenteVerificato', payload:response.data});
    }catch(err){
      console.log(err.response.data);
    }
  }
}

export const {Provider, Context} = dataContext(
  authReducer,
  {inserisciutente, autenticazione, verificautente},
  {isSignedIn:false, errorMessage:'', utenteVerificato:false} //isSignedIn è un array che funge da JWT. Ogni volta che l'utente si autentica
              //verrà salvato su tale variabile l'address in modo tale che potrà modificare tutti
              //i suoi token senza dover riautenticarsi. Bisogna dare la possibilità di cancellare tale valore dall'
              //AsyncStorage.
);

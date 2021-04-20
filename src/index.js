import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'




    firebase.initializeApp({
        apiKey: "AIzaSyBB5qBhzKiVrNyKd_YTMHrw8nc-YcHfpsA",
        authDomain: "chat-react-b0064.firebaseapp.com",
        projectId: "chat-react-b0064",
        storageBucket: "chat-react-b0064.appspot.com",
        messagingSenderId: "410644077733",
        appId: "1:410644077733:web:aa3819eb968a5adb51c14c",
        measurementId: "G-RHNB15EK0X"
    });



export const Context=createContext(null);

const auth=firebase.auth();
const firestore=firebase.firestore()



ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth,
          firestore
      }}>
          <App />
      </Context.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

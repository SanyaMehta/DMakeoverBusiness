import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './HelloWorld'
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtoRIDS2AsC5wHoqyEiYonlX-EKcCg4YA",
    authDomain: "dmakoever-business.firebaseapp.com",
    databaseURL: "https://dmakoever-business.firebaseio.com",
    projectId: "dmakoever-business",
    storageBucket: "dmakoever-business.appspot.com",
    messagingSenderId: "1026459214401"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();

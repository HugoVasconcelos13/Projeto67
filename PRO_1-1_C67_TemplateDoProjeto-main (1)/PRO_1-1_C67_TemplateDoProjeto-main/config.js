import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCHFBEH4hhVZszT7w45TfsOUPnD1u3OkL8",
        authDomain: "projeto67-cfa52.firebaseapp.com",
        databaseURL: 'https://projeto67-cfa52-default-rtdb.firebaseio.com/',
        projectId: "projeto67-cfa52",
        storageBucket: "projeto67-cfa52.appspot.com",
        messagingSenderId: "779860474727",
        appId: "1:779860474727:web:b2c8976c310ee9c66e8dc2"
      };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC54qAVEtZwUrFoX1u5slOFyVZm36wamXI",
    authDomain: "netflix-894d1.firebaseapp.com",
    databaseURL: "https://netflix-894d1.firebaseio.com",
    projectId: "netflix-894d1",
    storageBucket: "netflix-894d1.appspot.com",
    messagingSenderId: "249642578177",
    appId: "1:249642578177:web:217f100f9d810b9f5beb00"
};

const firebase = Firebase.initializeApp(config);



export { firebase };
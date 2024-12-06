import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCKZJdqvmF6fUVXgClMwB1-e_BtGSIWA1A",
authDomain: "cinestar-68faf.firebaseapp.com",
projectId: "cinestar-68faf",
storageBucket: "cinestar-68faf.firebasestorage.app",
messagingSenderId: "731718284339",
appId: "1:731718284339:web:ed12539b75ab6a8a985f46"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getCines = ()=> getDocs( collection( db, "cines" ) );
export const getPeliculas = ()=> getDocs( collection( db, "peliculas" ) );

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

const cines = await getDocs( query( collection(db,'cines'), orderBy('id')) )
const getPeliculas = async ( id ) => await getDocs( query( collection( db, 'peliculas' ), where('idEstado', '==', `${id}` ), orderBy('id') ) )
const getPelicula = async ( id ) => { 
    const data = await getDocs( query( collection(db, 'peliculas'), where('id', '==', `${id}` ) ) )
    let pelicula = 1
    data.forEach(doc => { pelicula = doc.data() })
    return pelicula
}

export { cines, getPeliculas, getPelicula }
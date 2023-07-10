// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { //CON ESTO SE ACCEDE A NUESTRA BASE DE DATOS
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID, // ID Del Proyecto
  storageBucket: process.env.STORAGE_BUCKET, // Dominio Proporcionado para Almacenar Archivos
  messagingSenderId: process.env.MESSAGING_SENDER_ID, // ID Para que Google se Comunique con Nosotros por Posh Ups
  appId: process.env.APP_ID, //ID De La App
  measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


/* MALA PRÁCTICA
export {
    app //Nombre de la BD
}
*/
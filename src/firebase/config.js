// config.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDk0WWfN5zZDNCQ9GQ_9-D28_5GaT0ars8",
  authDomain: "dona-3d.firebaseapp.com",
  projectId: "dona-3d",
  storageBucket: "dona-3d.appspot.com",
  messagingSenderId: "758833802605",
  appId: "1:758833802605:web:e3d821b6bd4a94e3367e64",
  measurementId: "G-19BLTMQKX2"
};

// Inicializa la app de Firebase y obtén la referencia al storage
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Corregir esta línea

export { storage };
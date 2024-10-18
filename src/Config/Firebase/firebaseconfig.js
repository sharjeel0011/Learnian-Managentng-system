import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MEASSAGINSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6WshwhDnx6xa49xfEJtbD1bupPkHtW6c",
  authDomain: "rendom-try-app.firebaseapp.com",
  projectId: "rendom-try-app",
  storageBucket: "rendom-try-app.appspot.com",
  messagingSenderId: "1001670023756",
  appId: "1:1001670023756:web:572d84dab857a6d3a032e9",
  measurementId: "G-Z4XY70YY2X"
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

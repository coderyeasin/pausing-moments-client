import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const momentsInitialization = () => {
  initializeApp(firebaseConfig);
};

export default momentsInitialization;

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuth = () => {
    initializeApp(firebaseConfig)
};
console.log(firebaseConfig);

export default firebaseAuth;


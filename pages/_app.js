import "../styles/index.css";
import '../styles/firebaseui.global.css'

import firebaseConfig from "../firebase-config.js"
import firebase from "firebase"
!firebase.default.apps.length ? firebase.default.initializeApp(firebaseConfig) : firebase.default.app();

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
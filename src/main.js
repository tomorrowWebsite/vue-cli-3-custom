import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Css
// 1 Normalize
import "normalize.css";

// Framework
// 1 Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Icon
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab);

// My Style
import "./scss/style.scss";

// Global Filters
// import "./Filter";

// Global Custom Directives
// import "./Custom-Directives";

// Start Sweet Alert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// End Sweet Alert

// Start Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9aZmmHq0Izn4pLbUtGdhwhGDZz2os3o0",
  authDomain: "vue-cli-3-custom.firebaseapp.com",
  projectId: "vue-cli-3-custom",
  storageBucket: "vue-cli-3-custom.appspot.com",
  messagingSenderId: "603557266894",
  appId: "1:603557266894:web:e27d06510b7acfbb00579f",
  measurementId: "G-TDNFVNLN0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;
// End Firebase

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .mount("#app");

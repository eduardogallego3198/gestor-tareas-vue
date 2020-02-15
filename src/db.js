import Firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvNCJsUv6lhHSkWcTl9qnaIXWMeNFEHyQ",
    authDomain: "fir-vue-egc.firebaseapp.com",
    databaseURL: "https://fir-vue-egc.firebaseio.com",
    projectId: "fir-vue-egc",
    storageBucket: "fir-vue-egc.appspot.com",
    messagingSenderId: "870885558406",
    appId: "1:870885558406:web:f748c2cb5f2945e61ca907",
    measurementId: "G-8495T1NNR4"
};

export const db = Firebase.initializeApp(firebaseConfig).firestore()
const { Timestamp, GeoPoint } = Firebase.firestore
export { Timestamp, GeoPoint }

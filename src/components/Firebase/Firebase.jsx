import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq9tbBpo2_fEycwIjvwQQS9tj5huquq0k",
  authDomain: "olx-c-60bd8.firebaseapp.com",
  projectId: "olx-c-60bd8",
  storageBucket: "olx-c-60bd8.firebasestorage.app",
  messagingSenderId: "837772961490",
  appId: "1:837772961490:web:fd1f9ec37026e270feaf0b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();
const fireStore = getFirestore();

const fetchFromFirestore = async () => {
  try {
    const productsCollection = collection(fireStore, "Products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("feteched products from fireStore: ", productList);
    return productList;
  } catch (error) {
    console.log("Error fetching products from firestore: ", error);
    return [];
  }
};

export { auth, provider, storage, fireStore, fetchFromFirestore };

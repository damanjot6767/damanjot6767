import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// API methods
export const firebaseApi = {
    // GET request
    get: async (collectionName: string): Promise<any> => {
      try {
        const dataCol = collection(db, collectionName);
        const dataSnapshot = await getDocs(dataCol);
        const dataList = dataSnapshot.docs.map(doc => doc.data());
        return dataList
      } catch (error) {
        throw error
      }
    },
    getById: async ({collectionName, docId}:{collectionName: string, docId: string}): Promise<any> => {
      try {
        const dataCol = collection(db, collectionName);
        const dataSnapshot = await getDocs(dataCol);
        const dataList = dataSnapshot.docs.map(doc => doc.data());
        const data = dataList?.find((ele)=> ele?.id===docId);
        if(!data) throw({status: 401, message: 'document not found'});
        return data
      } catch (error) {
        throw error
      }
    },
    getManyByIds: async ({collectionName, docIds}:{collectionName: string, docIds: string[]}): Promise<any> => {
      try {
        const dataCol = collection(db, collectionName);
        const dataSnapshot = await getDocs(dataCol);
        const dataList = dataSnapshot.docs.map(doc => doc.data());

        let data: any = []
        docIds?.forEach((id)=>{
          const res = dataList?.find((doc)=>(doc?.id===id));
          data.push(res)
        });
        if(!data) throw({status: 401, message: 'document not found'});
        return data
      } catch (error) {
        throw error
      }
    }
  
  };
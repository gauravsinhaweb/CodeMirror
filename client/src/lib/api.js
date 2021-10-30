import axios from 'axios'
const FIREBASE_URI="https://hackout-30793-default-rtdb.firebaseio.com/"
export const addcode=({code,userId})=>{
const res=axios.post(`${FIREBASE_URI}/${userId}.json`);

}
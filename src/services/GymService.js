// import firebase from "./firebase";
import firebaseApp from "./firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// const db = firebase.ref("/tutorials");
const firestore = getFirestore(firebaseApp);

const getRutina = async () => {
    const uid = 'aU4pYZfmxKfGOEArksaDvkrnRWV2';
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const consulta = await getDoc(docuRef);
    const data = consulta.data();
    return data;
};

// const create = (data) => {
//   return db.push(data);
// };

// const update = (key, data) => {
//   return db.child(key).update(data);
// };

// const remove = (key) => {
//   return db.child(key).remove();
// };

// const removeAll = () => {
//   return db.remove();
// };

export default getAll;
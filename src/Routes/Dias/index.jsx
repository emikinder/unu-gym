import React, { useEffect } from 'react';
import { useState } from "react/cjs/react.development";
import firebaseApp from "../../services/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import Header from "../../components/Header";
import ListadoDias from "../../components/ListadoDias";
import Spinner from "../../components/commons/Spinner/index";

import './styles.css';

const firestore = getFirestore(firebaseApp);
 
const Dias = () => {
  const [dias, setDias] = useState(null);

  const fetchDias = async () => {
    const uid = 'aU4pYZfmxKfGOEArksaDvkrnRWV2';
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const consulta = await getDoc(docuRef);
    const data = consulta.data();
    setDias(data.dias);
  }

  useEffect(()=> {
    fetchDias();
  }, [])

  return (
    <>
      <Header />
      <main>
        {dias ? <ListadoDias dias={dias} /> :
          <div className='container__spinner'><Spinner /></div>
        }
      </main>
    </>
  );
}

export default Dias;
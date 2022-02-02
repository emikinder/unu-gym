import React, { useEffect } from "react";

import firebaseApp from "../../services/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState } from "react/cjs/react.development";
import ListadoDias from "../ListadoDias";

import "./styles.css";
const firestore = getFirestore(firebaseApp);

const Home = ({ user }) => {
  const [rutina, setRutina] = useState(null);

  async function findOrCreateUser(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const consulta = await getDoc(docuRef);
    if (consulta.exists()) {
      const data = consulta.data();
      return data.dias;
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    async function fetchRutina() {
      const rutina = await findOrCreateUser(user.uid);
      setRutina(rutina);
    }

    fetchRutina();
  }, []);

  return (
    <>
      {rutina ? <ListadoDias dias={rutina} /> : null}
    </>
  );
};

export default Home;

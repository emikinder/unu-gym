import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import firebaseApp from "../../services/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Outlet, Link } from "react-router-dom";
import Spinner from "../../components/commons/Spinner/index";

import "./styles.css";

const firestore = getFirestore(firebaseApp);

const listadoDias = (dias) => {
  return (
    <div className="listadoDias">
      {dias.map((dia) => {
        return (
          <Link
            to={`/dias/${dia.numero}`} state={{ info: {dia} }}
            key={dia.numero}
            style={{ textDecoration: "none" }}
            data={dia}
          >
            <div className="listadoDias__dia">
              <p>Día {dia.numero}</p>
              <p className="listadoDias__ejercicios">
                {dia.ejercicios.length} ejercicios
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const Dias = () => {
  const [dias, setDias] = useState(null);

  const fetchDias = async () => {
    const uid = "aU4pYZfmxKfGOEArksaDvkrnRWV2";
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const consulta = await getDoc(docuRef);
    const data = consulta.data();
    setDias(data.dias);
  };

  useEffect(() => {
    fetchDias();
  }, []);

  return (
    <>
      <main>
        {dias ? (
          listadoDias(dias)
        ) : (
          <div className="container__spinner">
            <Spinner />
          </div>
        )}
      </main>
      <Outlet />
    </>
  );
};

export default Dias;

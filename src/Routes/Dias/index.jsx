import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import firebaseApp from "../../services/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Outlet, Link } from "react-router-dom";
import Spinner from "../../components/commons/Spinner/index";

import { FaCalendarCheck } from 'react-icons/fa';

import "./styles.css";

const firestore = getFirestore(firebaseApp);

const listadoDias = (dias) => {
  return (
    <>
      {dias.map((dia) => {
        return (
          <Link
            to={`/dias/${dia.numero}`} state={{ info: {dia} }}
            key={dia.numero}
            style={{ textDecoration: "none" }}
            data={dia}
          >
            <div className="listadoDias__dia">
              <p><FaCalendarCheck /> DÍA {dia.numero}</p>
              <p className="listadoDias__ejercicios">
                {dia.ejercicios.length} ejercicios
              </p>
            </div>
          </Link>
        );
      })}
    </>
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
      <div className="listadoDias">
        {dias ? (
          listadoDias(dias)
        ) : (
          <div className="container__spinner">
            <Spinner />
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Dias;

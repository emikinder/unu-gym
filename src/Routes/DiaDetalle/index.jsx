import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";

import './styles.css';

const DiaDetalle = () => {
  const location = useLocation();
  const { info }  = location.state;
  const data = info.dia;
  console.log(data);
  let params = useParams();
  console.log(params);
  return (
    <>
    <Link to='/dias'>◀ </Link>
      <h2>DiaDetalle {params.diaId}</h2>
      { data && data.ejercicios.map((ejercicio, i) => {
        return (<span key={i}>{ejercicio.nombre}</span>)
      })}
    </>
  )
}

export default DiaDetalle;
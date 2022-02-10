import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/Header';

import './styles.css';

const DiaDetalle = () => {
  let params = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <div>DiaDetalle {params.diaId}</div>
    </>
  )
}

export default DiaDetalle;
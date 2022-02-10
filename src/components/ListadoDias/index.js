import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';

const ListadoDias = ({dias}) => {
  return (
    <div className='listadoDias'>
      {dias.map((dia) => {
        console.log(dia);
        return (
          <Link to={`/dias/${dia.numero}`} key={dia.numero}>
            <div className='listadoDias__dia'>
              <p>Día {dia.numero}</p>
              <p className='listadoDias__ejercicios'>{dia.ejercicios.length} ejercicios</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
};

export default ListadoDias;

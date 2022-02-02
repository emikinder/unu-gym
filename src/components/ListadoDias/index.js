import React from 'react';
import Ejercicios from '../Ejercicios';

import './styles.css';

const ListadoDias = ({dias}) => {
    return (
      <div className='listadoDias'>
        {dias.map((dia, index) => {
          console.log(dia);
          return (
            <div className='listadoDias__dia' key={index}>
              <p>Día {dia.numero}</p>
              <p className='listadoDias__ejercicios'>{dia.ejercicios.length} ejercicios</p>
            </div>
          )
        })}
      </div>
    );
  };

export default ListadoDias;

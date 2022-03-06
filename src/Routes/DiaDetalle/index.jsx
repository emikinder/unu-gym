import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';

import './styles.css';

const DiaDetalle = () => {
  const location = useLocation();
  const { info }  = location.state;
  const data = info.dia;

  const variaciones = (variaciones) => {
    return (
      <>
        {variaciones.map((variacion, index) => {
          return (
            <div key={index}>
              <p className='ejercicio__reps'><span className='ejercicio__num'>{variacion.series}</span> x {variacion.reps} x {variacion.peso}</p>
            </div>
          )
        })}
      </>
    )
  }

  const ejercicios = (ejercicios) => {
    return (
      <>
        {ejercicios.map((ejercicio, index) => {
          return (
            <div className='ejercicio' key={index}>
              <div className='ejercicio__ico'><MdFitnessCenter /></div>
              <div className='ejercicio__data'>
                <p className='ejercicio__nombre'>{ejercicio.nombre}</p>
                { ejercicio.variaciones ? (variaciones(ejercicio.variaciones)) : <></> }
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      <div className='detalle'>
        <div className='detalle__header'>
          <Link to='/dias' className='volver_ico'><FaArrowAltCircleLeft /></Link>
          <span className='detalle__titulo'>EJERCICIOS DÍA {data.numero}</span>
        </div>
        { data ? ejercicios(data.ejercicios) : <span>Error</span> }
      </div>
    </>
  )
}

export default DiaDetalle;
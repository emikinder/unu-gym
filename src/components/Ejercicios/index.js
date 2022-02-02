import React from "react";

const Ejercicios = ({ ejercicios }, index) => {
  console.log(ejercicios);
  return (
    <div>
      {ejercicios
        ? ejercicios.map((ejercicio, index) => {
            return (
              <div key={index}>
                <p>{ejercicio.nombre}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Ejercicios;

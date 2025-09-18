import React from 'react';

export default function Semaforo({ setColorSemaforo }) {

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      <button
        className="btn btn-outline-primary mb-4 mt-4"
        onClick={() => setColorSemaforo('#FF0000 ')}
      >
        ROJO
      </button>
      <button
        className="btn btn-outline-primary mb-4 mt-4"
        onClick={() => setColorSemaforo('#FFFF00')}
      >
        AMARILLO
      </button>
      <button
        className="btn btn-outline-primary mb-4 mt-4"
        onClick={() => setColorSemaforo('#00FF00')}
      >
        VERDE
      </button>
    </div>
  );
}
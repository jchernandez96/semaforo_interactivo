import React, { useState } from 'react';

export default function Semaforo({ estado }) {
  const [cambio, setCambio] = useState({ rojo: "", amarillo: "", verde: "" });

  const cambiarColor = (color) => {
    estado(color);

    if (color === "#FF0000") {
      setCambio({ rojo: "disabled", amarillo: "", verde: "" });
    } else if (color === "#FFFF00") {
      setCambio({ rojo: "", amarillo: "disabled", verde: "" });
    } else if (color === "#00FF00") {
      setCambio({ rojo: "", amarillo: "", verde: "disabled" });
    }

    console.log(color);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      <button
        disabled={cambio.rojo === "disabled"}
        className="btn btn-danger mb-4 mt-4"
        onClick={() => cambiarColor("#FF0000")}
      >
        ROJO
      </button>
      <button
        disabled={cambio.amarillo === "disabled"}
        className="btn btn-warning mb-4 mt-4"
        onClick={() => cambiarColor("#FFFF00")}
      >
        AMARILLO
      </button>
      <button
        disabled={cambio.verde === "disabled"}
        className="btn btn-success mb-4 mt-4"
        onClick={() => cambiarColor("#00FF00")}
      >
        VERDE
      </button>
    </div>
  );
}
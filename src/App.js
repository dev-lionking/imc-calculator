import React, { useState } from "react";

import "./index.css";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState("");
  const [mensaje, setMensaje] = useState("");

  let calcImc = (e) => {
    e.preventDefault();

    if (peso === 0 || altura === 0) {
      alert("Ingrese los valores indicados en peso y altura... no sea Pavo!");
    } else {
      //Calculos
      let imc = peso / (altura * altura);
      setImc(imc.toFixed(1));

      //Mensajes al usuario
      if (imc < 25) {
        setMensaje("Estas por debajo del peso");
      } else if (imc >= 25 && imc < 30) {
        setMensaje("Estas en tu peso ideal");
      } else {
        setMensaje("Estas con sobrepeso");
      }
    }
  };

  let imgSrc = "";

  if (imc < 1) {
    imgSrc = null;
  } else {
    if (imc < 25) {
      imgSrc = require("../src/assets/underweight.png");
    } else if (imc >= 25 && imc < 30) {
      imgSrc = require("../src/assets/healthy.png");
    } else {
      imgSrc = require("../src/assets/overweight.png");
    }
  }

  //Reseteo de formulario
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">CALCULADORA - IMC</h2>
        <form onSubmit={calcImc}>
          <div>
            <label>Peso (kg)</label>
            <input value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
          <div>
            <label>Altura (CM)</label>
            <input value={altura} onChange={(e) => setAltura(e.target.value)} />
          </div>
          <div>
            <button className="btn">Calcular</button>
            <button className="btn btn-outline" onClick={reload}>
              Limpiar valores
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Su IMC es: {imc}</h3>
          <p>{mensaje}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

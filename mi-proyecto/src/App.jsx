// App.jsx
import React, { useState } from "react";
import { Conocer, Comer } from "./contador";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [contador, setContador] = useState(0);

  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <h1>Hola, {nombre}</h1>

      {/* Contador con botón */}
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onDoubleClick={() => setContador(contador - 1)}>
        Decrementar (doble click)
      </button>

      {/* Input controlado */}
      <input
        type="text"
        value={nombre}
        onChange={handleInputChange}
        placeholder="Escribe tu nombre"
      />

      {/* Usando tus componentes */}
      <Conocer pais="Perú" opinion="¡React es genial!" />
      <Comer fruta="manzanas" kilos={2} />
    </div>
  );
}


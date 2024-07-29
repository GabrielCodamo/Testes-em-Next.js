"use client"
import { useState } from "react";

export default function Contador() {
  const [cont, setCont] = useState(0)
  
  const decrementar  = () => {
    if(cont > 0){
      setCont((prev) => prev - 1)
    }
  } 

  return (
    <>
      <h1 className="teste">Contador</h1>
      <div className="teste">Valor Aqui: {cont}</div>
      <div className="teste"
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "15px",
      }}>
        <button onClick={decrementar}>-</button>
        <button onClick={() => setCont( cont + 1)}>+</button>
      </div>
    </>
  );
}

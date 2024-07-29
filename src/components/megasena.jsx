"use client"
import { useState, useEffect } from "react";

export default function Megasena() {
    
    const [qtd, setQtd] = useState(6)
    
    let array =  []

    const gerarnum = () => {
      function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      // Definindo valores mínimo e máximo
      const minimo = 1;
      const maximo = 60;
      
      // Gerando um número aleatório entre 1 e 60
      let numeroaleatorio = 0;
     
      while (array.length < qtd) {
        numeroaleatorio = gerarNumeroAleatorio(minimo, maximo)
        // condicao para saber se existe numero repitido
        if (array.indexOf(numeroaleatorio) === -1) {
            array.push(numeroaleatorio);
        }
    }
    // Passando o valor 
      return array
    }
    function novaRender(){
      setValor(gerarnum().sort((a, b)=> a- b))
    }

    const [valor, setValor] = useState([])
    
    useEffect(()=> 
      novaRender()
    ,[])

    return (
    <div className="steste">
      <h1>MegaSena</h1>
      <div style={{
          display: "flex",
          flexWrap: "wrap"
        }} >
      {
        valor.map((valor,index) => (
            <div className="linha"
            key={index}>
                {valor}
            </div>
        ))
      }
      </div>
      <div style={{
        marginTop: "5px",
        gap:"10px",
        marginBottom: "10px"
      }}>
        <label >Informe quantos numeros quer sortear: </label>
        <input 
        onChange={(ev) => setQtd(+ev.target.value)}
        type="number" name="quantidade" value={qtd} min={1} max={30}/>
      </div>
      <button
      onClick={novaRender}> Gerar </button>
    </div>
  );
}

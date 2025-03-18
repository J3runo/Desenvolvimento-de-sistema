'use client'

import { useState } from "react"
import "./home.css"


export default function Home() {
  // let contador = 0
  const [Contador,setContador] = useState(0)

  function incrementar(){
    setContador(Contador + 1) 
  }

  function reset(){
    setContador(0)
  }

  function decrementar(){
    if(Contador > 0){
    setContador(Contador - 1)
  }

 
  }



  return (
    <div className="container">
      <h1>Contador: {Contador}</h1>
      <button onClick = {() => incrementar()}>incrementar</button>
      <button onClick = {() => decrementar()}>decrementar</button>
      <button onClick = {() => reset()}>resetar</button>
    </div>
  );
  }

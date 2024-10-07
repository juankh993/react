import React from "react";
import { useState } from "react";

const Sum = () => {
    // let num1=10, num2=8, res=0;
    // res = num1 + num2;

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);


    function sumar () {
        setResultado(Number(num1) + Number(num2));
        console.log(resultado);
    }



    return (
        <>
        {/* <div>
            <h1>Suma sencilla de 2 números</h1>
            <p>El  resultado de sumar {num1} + {num2} es {res}</p>
        </div> */}
        <div>
            <h2>Suma ingresada por el usuario</h2>
            <form>
            <label> Ingrese el primero número</label>
            <br></br>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Ingrese un numero"/>
            <br></br>
            <br></br>
            <label> Ingrese el segundo número</label>
            <br></br>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Ingrese un numero"/>
            <br></br>
            <br></br>
            </form>
            <button onClick={sumar}>Resultado</button>
            <h3>Total: {resultado}</h3>
        </div>
        </>
    )
} 

export default Sum;
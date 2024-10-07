import React from "react";
import { useState } from "react";



const MyButton = () => {
        //El hook useState.
        // el valor inicial del boton es count = 0 ya que ese es el valor que se le dió al useState, con el setcount se puede cambiar el valor
    const [count, setCount] = useState(0);

    function handleClick() {
        // alert('¡Me hiciste clic!');
        setCount(count + 1);
      }

    return(
        <>
        <body style={{backgroundColor: '#ececec'}} >
        <div>
        <h1>Hiciste {count} clicks.</h1>
        <button onClick={handleClick}>Soy un botón</button>
        </div> 
        </body>
        </>
    )
}

export default MyButton;
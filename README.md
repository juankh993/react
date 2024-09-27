# Apuntes REACT

Componentes para interfaces de usuario.\
Creamos partes de la página por separado.\
Sus etiquetas deben llevar etiquetas de cierre. El archivos <u>app.js</u> o <u>index.js</u>, se comunica a través de un <u>id</u> que está en el <u>index.html</u> para poder mostrar los componentes llamados en el <u>index.js</u> o <u>app.js</u> (como lo quieras llamar).\
Los Componentes los podemos llamar <u>archivo.js</u> o <u>archivo.jsx</u>, este último permite tener código HTML con javascript.

```
<> 
    <button onclick={nombreFuncion}>Soy un botón</button> 
</>
```

Sin las etiquetas **<></>** daría un error.

- Los componentes empiezan con mayuscula **<App/ >**.
- Para poner una clase en react se debe poner **className**, ejemplo:\
` <img className="nombreClase" />`

- Puedes poner estilos en linea así: `style={{estilos}}`

## Creando un componente
### <u>Estructura</u>

```
    import React from 'react';

     const MyButton = () => {
        return (

        )
    } 
```

### <u>06/08/2024</u>
Un objeto puede tener otro objeto dentro

```
    const Person = {
        name: 'Gregorio',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };
```

### PROPS

Los componentes en react usan props para comunicarse entre ellos. Un Componente padre puede pasarle información a sus componentes hijos dandoles props.\
Para declarar <u>props</u> se debe incluir el par de llaves `{{}}` y dentro parentesis `()`.

```
function Avatar ({person, avatar}){
    //...
}
```
Esta sintaxis se conoce como **destructuring** y es equivalente acceder a propiedades de un paramentro de función.

```
function Avatar (prop) {
    let person = props.person;
    let size = props.size;
}
```

Se puede asignar un valor predeterminado para una prop en caso de que no especifique ningún valor, puedes hacerlo mediante la desestructuración, colocando el signo **=** seguido del valor predeterminado justo después del parametro.

```
function Avatar ({person, size = 100}) {
    //...
}
```

<u>**Nota:**</u> Si se pasa la prop `size = {null}` o `size = {0}`, el valor predeterminado **no se aplicará**.
 
### Export

<u>Export default function NombreFuncion:</u> Permite importar la función en otros archivos.\
Un archivo no puede tener más de un <u>**export**</u> por defecto pero puede tener tantos <u>**export**</u> por <u>**nombre**</u> como desees.

| <center><h3>Por defecto</h3></center> | <center><h3>Por nombre</h3></center> |
| ----------- | ---------- |
| ` export default function Button(){} ` | ` export function Button() {} ` |
| ` import Button from './button.js'; ` | ` import { Button } from './Button.js'; ` |

**Nota:** A menudo se usan los exports con nombre cuando tienes varios componentes en un mismo archivo.\
Un archivo solo puede tener un <u>export</u> por defecto, pero puede tener multiples <u>exports</u> por nombre.


# Marcado

Para devolver multiples elementos de un componente, puedes encerrar los elementos en una etiqueta `<div></div>`o se puede escribir `<></>`, a esto se le conoce como fragmento que agrupa elementos sin hacer uso de un nodo que los envuelva.

# Reenviar props con la sintaxis de propagación

***...props*** es una forma concisa de pasar todas las propiedades de un objeto, en este caso las **props** a un componente hijo. Es útil cuando tienes muchos **props** que quieres pasar a un componente sin tener que enumerarlos manualmente uno por uno.

```
function MyComponent (props) {
    return <div>{props.text}</div>
}

function ParentComponent(){  // Este componente tiene un objeto myProps con varias propiedades
    const myProps = {
        text: "Hola mundo",
        className: "my-class",
        id: "my-id"
    }
    return <MyComponent {...props} /> //Cuando se utiliza el componente MyComponent, se pasan todas las propiedades myProps a MyComponente.
}
```


# Pasar JSX como hijos

Significa que dentro de la etiqueta de apertura y de cierre del componente, pueda enviar cualquier contenido como elementos **HTML** o incluso otros **componentes**. Es como cuando abres un `<div>` pones el contenido y cierras el `</div>`

El sigueinte componentes muestra lo que le pases dentro de sus etiquetas de apertura y de cierre, usando <u>**{props.children}**</u>


```
    function card (props) {
        return (
            <div className="card">
            {props.children}
            </div>
        )
    }
```

Como segundo paso vamos a usar el componente <u>**card**</u>. Aquí usamos el componente card y le está pasando contenido entre sus etiquetas de apertura y de cierre. Este contenido será visible dentro de <u>Card</u> como <u>props.children</u>

```
export default function App() {
    return (
        <Card>
            <h1>Hola</h1>
            <p>Mundo</p>
        </card>
    )
}
```

<u>props.children</u> se suele utilizar para crear envoltorios visuales como paneles o rejillas.

# HOOK

En React, useState, así como cualquier otra función que empiece con "use", se le conoce como Hook. Los Hooks son funciones especiales que sólo están disponibles mientras React está renderizando

### Nota
 Las funciones-Hook que empiecen con use deben ser solo llamadas en el nivel superior de los componentes o en tus propios Hooks. No podemos usar Hooks dentro de condicionales, bucles, u otras funciones anidadas. Los Hooks son funciones, pero es útil pensar en ellos como declaraciones independientes de las necesidades de nuestro componente. Las funciones de React se «usan» en la parte superior del componente de manera similar a cómo se «importan» módulos en la parte superior de un archivo.

## Hook use state 

`const [index, setIndex] = useState(0);`

El único argumento para useState es el valor inicial de su variable de estado. En este ejemplo, el valor inicial de index se establece en 0 con useState(0).

Cada vez que el componente se renderiza, el useState devuelve un array que contiene dos valores:

1. La variable de estado (index) con el valor que almacenaste.
2. La función que establece el estado (setIndex) que puede actualizar la variable de estado y alertar a React para que renderice el componente nuevamente.

Este hook lo que hace es recordar algo.

### Nota 

La convención es nombrar estas dos variables como `const [algo, setAlgo]`. Podemos nombrarlo como queramos, pero mantener las convenciones hacen que las cosas sean más fáciles de entender en todos los proyectos.
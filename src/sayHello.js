import React from 'react';


function Hello() {
  const sayHello = () => {
    console.log("Hola");
  }

  return (
    <div>
      <h3>This is a hello component</h3>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}

export default Hello;
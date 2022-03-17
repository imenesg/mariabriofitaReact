import React from 'react';
import ReactDOM from 'react-dom';

import "../src/assests/css/reset.css"
import "../src/assests/css/root.css"
import "../src/assests/css/body.css"


import Header from "../src/components/header"
import Plantas from "../src/components/plantas"
import Card from "../src/components/card"
import Sobre from "../src/components/sobre"


//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Plantas>
      <Card nomePlanta="Jiboia"  rega="2 a 3 vezes por semana"  luz="Meia sombra/ luzindireta">a Jiboia é uma trepadeira que se dá bem em variados tipos de ambientes e não demanda tantos cuidados. cresce rápido e se alastra com facilidade pela casa. existem inúmeras variedades de jiboia, e para fazer uma muda, basta cortar um galho e colocá-lo na água até criar raízes.</Card>

      <Card nomePlanta="Fitônia"  rega="2 a 3 vezes por semana"  luz="Meia sombra/ luzindireta">Com variadas cores e ótima para ambientes internos, a Fitônia é uma boa escolha de folhagem para se ter na escrivaninha ou na mesa</Card>
    </Plantas>
    <Sobre></Sobre>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

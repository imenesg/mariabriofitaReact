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
      <Card nomePlanta="Jiboia"  rega="2 a 3 vezes por semana"  luz="Meia sombra/ luzindireta">A Jiboia é uma trepadeira que se dá bem em variados tipos de ambientes e não demanda tantos cuidados. Cresce rápido e se alastra com facilidade pela casa. Existem inúmeras variedades de jiboia, e para fazer uma muda, basta cortar um galho e colocá-lo na água até criar raízes.</Card>

      <Card nomePlanta="Fitônia"  rega="2 a 3 vezes por semana"  luz="Meia sombra/ luzindireta">Com variadas cores e ótima para ambientes internos, a Fitônia é uma boa escolha de folhagem para se ter na escrivaninha ou na mesa de estudos. Não requer muitos cuidados, enfeita o local e mudas dela podem ser feitas por estacas com aproximadamente 3 a 4 pares de folhas.</Card>
      
      <Card nomePlanta="Singônio estrela"  rega="diária"  luz="meia sombra">Essa espécie de fácil cuidado é muito comum nos jardins e casas. Esse tipo de singônio se adapta bem a qualquer tipo de ambiente, gosta de um solo úmido e se desenvolve facilmente, produzindo mudas com grande rapidez.</Card>

      <Card nomePlanta="Philodendron martianum"  rega="2 a 3 vezes por semana" luz="meia sombra / luz indireta">Essa planta, também conhecida como Pacová ou babosa-de-pau, é uma planta bastante resistente e que guarda água em seu caule e folhas. Com folhagem verde e brilhante, é uma planta muito bonita e que cresce bem com os cuidados adequados.</Card>
    
      <Card nomePlanta="Orquídea Phalaenopsis"  rega="1 vez por semana" luz="luz indireta ou direta por poucas horas no dia">Como variados tipos de orquídeas, essa espécie não gosta de muita água e prefere um solo com boa ventilação para as raízes e boa drenagem. É uma planta que se adapta a ambientes externos e internos e que produz lindas flores, perfumando o local.</Card>
    
      <Card nomePlanta="Peperomia Melancia"  rega="2 a 3 vezes por semana" luz="meia sombra / luz indireta">Existem mais de mil espécies de peperômias no mundo, e essa folhagem suculenta, em específico, gosta de um solo úmido e claridade para se manter brilhante e vistosa.</Card>
    </Plantas>
    <Sobre></Sobre>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

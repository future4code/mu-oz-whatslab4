import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import {ContainerGeral} from './styles/index'

//Component
//import Inputs from './componets/inputs/index'
//import BoxMensagem from './componets/BoxMensagem'
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <ContainerGeral>
        <App />
    </ContainerGeral>
  </React.StrictMode>,
  document.getElementById('root')
);



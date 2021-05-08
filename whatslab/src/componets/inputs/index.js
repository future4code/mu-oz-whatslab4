import React from 'react';
//image


//styled
import {
  ContainerInput,
  InputNome,
  InputMensagem,
  Button,

} from './stylead';



 class Inputs extends React.Component {

  //Construtor
  state ={
    mensagem: [
      {
        usuario:"",
        mensagem:""
      }
    ]
  }

    render() {
        return(
              
          <ContainerInput>
              <InputNome type="text"  placeholder="Usuário"/>
              <InputMensagem type="text"  placeholder="Mensagem" />
              <Button type="">Enviar</Button>
            </ContainerInput>
          
      );
    }  
}
export default Inputs;


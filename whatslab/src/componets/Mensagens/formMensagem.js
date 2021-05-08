import React from "react";

//Imagens
import ImgSend from '../../img/send.svg'

//Styleds 
import {
  ContainerBox,
  BoxMensagem,
  ContainerInput,
  ListaMensagem,
  InputUsuario,
  InputMensagem,
  Botao,
  MensagemRecebida
} from './stylead'

export class Input extends React.Component {
  state = {
    mensagens: [
      {
        usuario: "Usuário",
        mensagem: "Mensagem",
      },
    ],

    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
    });

  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  aoApertarEnter = (event) => {
    if (event.key === "Enter") {
      return this.adicionaMensagem();
    }
  };

  listaMensagensCorreta = () =>{

  }


  render() {
    
    const listaDeMensagens = this.state.mensagens.map((dados) => {
     
      return (
        <MensagemRecebida>
          <span>{dados.usuario}</span>
          {dados.mensagem}
        </MensagemRecebida>

      );
    });

    if (listaDeMensagens.usuario === "s") {
      console.log("Correto")
    } else {
      console.log("Erro1")
    }

    return (

<>
      <ContainerBox>
        <BoxMensagem>
          <ListaMensagem >
            {listaDeMensagens}
          </ListaMensagem>

          <ContainerInput>
            <InputUsuario
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <InputMensagem
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
              onKeyPress={this.aoApertarEnter}
            />
            <Botao onClick={this.adicionaMensagem}>
              <img className="lupaBusca" src={ImgSend} alt="Embaralhar" />
            </Botao>

          </ContainerInput>
        </BoxMensagem>
      </ContainerBox>
</>
    );
  }
}

export default Input;
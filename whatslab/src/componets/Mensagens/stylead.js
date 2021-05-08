import styled from 'styled-components';
import imgFundoBoxMensagem from '../../img/Fundowhatsapp2.png';


export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
`;

export const BoxMensagem = styled.div`
  display: flex;
  flex-direction: column;
  
  max-height: 500px;
  height: 100vh;
  width: 45vw;
  border: 1px solid #51A888;

  background:url(${imgFundoBoxMensagem});
  border-radius: 5px;
  
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  
  justify-content: space-evenly;
  gap: 10px;
  padding:10px;
  
  
  background-color:#51A888;
  border-radius: 5px;
  
`;

export const InputUsuario = styled.input`
  height: 5vh;
  width: 7vw;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 16px;

  box-shadow: 0px 0px 10px 0px #338AE8; 

  :focus{
    box-shadow: 0 0 0 0;
    outline: 0;
    }
  
`;

export const InputMensagem = styled.input`
  width: 28vw;
  height: 5vh;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 16px;

  box-shadow: 0px 0px 10px 0px #338AE8; 
  
  :focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  
`;

export const Botao = styled.button`

width: 60px;
height: 60px;

border-radius: 50%;
background: #fff;
border: solid 1px #338AE8;
box-shadow: 0px 0px 10px 0px #338AE8; 

display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

  img{
  height: 33px;
  width: 33px;
  
}

&:hover{
     
     box-shadow: 0px 0px 20px 0px #338AE8;
     cursor: pointer;
     transition: all 0.3s ease;
  }

`;

export const MensagemRecebida = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  height: 6vh;
  padding: 10px;
  min-width: 8vw;

  margin-bottom: 2vh;

  background-color: #353A49;
  box-shadow: 0px 0px 5px 0px #338AE8;
  border-radius: 0px 5px 5px;
  border: none;

  color: #ffff;
  font-family: roboto;
  
  span{
    font-weight: 500;
    color: #E6E6E6;
    
  }

`;

export const ListaMensagem = styled.div`
       flex: 1;
       max-height: 500px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: flex-end;
       
       overflow: hidden;
       margin-left: 10px;
`;
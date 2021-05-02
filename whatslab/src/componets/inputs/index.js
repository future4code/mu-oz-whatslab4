
//image


//styled
import {
  ContainerInput,
  InputNome,
  InputMensagem,
  Button,

} from './stylead';



function Inputs (props){



    return(
        
        <ContainerInput>
            <InputNome type="text"  placeholder="Usuário"/>
            <InputMensagem type="text"  placeholder="Mensagem" />
            <Button type="">Enviar</Button>
          </ContainerInput>
        
    );
}
export default Inputs;


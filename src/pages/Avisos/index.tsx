import { Container, Content } from './styles';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Aviso } from '../../components/Aviso';

export function Avisos() {
  return (

    <Container>
      <Content>
        <h1>Avisos</h1>
        <div>
          <input type="text" placeholder="Palavras-chave" />
          <BiSearchAlt2 />
        </div>
        <Aviso />
      </Content>
    </Container>
  );

}
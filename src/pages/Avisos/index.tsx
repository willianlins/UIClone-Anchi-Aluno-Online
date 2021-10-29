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
        <Aviso  type='important' titleSpan='Comunicado importante'/>
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
        <Aviso  type='normal' titleSpan='18/10/2021' contRealese='Mural InternoEdial de Dependência e Adaptação Presencial 2021/2Clique aqui para acessar a publ ...' />
      </Content>
    </Container>
  );

}
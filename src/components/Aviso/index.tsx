import { MdEmail } from 'react-icons/md';
import {SectionContainer, SectionContent} from './styles';




export function Aviso() {
  return (
    <SectionContainer>
      <div>
        <span>Comunicados Urgentes</span>
        <MdEmail />
      </div>
      <SectionContent>
        <h1>Plano de Retomada para Aulas Precenciais - Graduação 2021</h1>
        <a href="http://localhost:3000/">Clique aqui e leia na integra</a>

        <h2>Saiba como se prevenir</h2>
        <p>Saiba como se prevenir contra o <strong>CORONAVÍRUS </strong><a href="http://localhost:3000/">Clique aqui para visualizar as dicas</a></p>

        <h3>Consulte DP/ADADP - GRADUAÇÃO PRESENCIAL - </h3><a href="http://localhost:3000/">ACESSE AQUI</a>
      </SectionContent>
    </SectionContainer>

  );
}
import { MdEmail } from 'react-icons/md';
import { SectionContainer, SectionContent } from './styles';

interface typeSection {
  type: string;
  titleSpan?: string;
  contRealese?: string;
}


export function Aviso({ type = 'normal', titleSpan = '', contRealese = '' }: typeSection) {
  return (
    <SectionContainer type={type}>
      <div>
        <span>{titleSpan}</span>
        <MdEmail />
      </div>
      {type === 'important' ? (
        <SectionContent type='important'>
          <h1>Plano de Retomada para Aulas Precenciais - Graduação 2021</h1>
          <a href="http://localhost:3000/" >Clique aqui e leia na integra</a>

          <h2>Saiba como se prevenir</h2>
          <p>Saiba como se prevenir contra o <strong>CORONAVÍRUS </strong><a href="http://localhost:3000/">Clique aqui para visualizar as dicas</a></p>

          <h3>Consulte DP/ADADP - GRADUAÇÃO PRESENCIAL - <a href="http://localhost:3000/"> ACESSE AQUI</a></h3>
        </SectionContent>
      ) : (
        <SectionContent type='normal'>
          <p>{contRealese}</p> 
        </SectionContent>
      )}

    </SectionContainer>
  );
}
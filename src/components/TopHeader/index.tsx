import { Container, ContentLeft, ContentRight } from '../TopHeader/styles';

export function TopHeader() {


  return (
    <Container>
      <ContentLeft>
        <img src="https://github.com/willianlins.png" alt="Imagem Perfil" />
        <div>
          <span><strong>willian Lins Araujo</strong></span>
          <span><strong>RA:</strong> 1804447</span>
          <a href='http://localhost:3000/'>Carteirinha Digital</a>
        </div>
      </ContentLeft>
      <ContentRight>
        <span><strong>264- Bacharelado em ciência...</strong></span>
        <span><strong>Série:</strong> 7 <strong>Período:</strong> 2021/2<strong>Turma:</strong> CCO-1/2-A-N</span>
        <span><strong>Status:</strong> Ativo</span>
      </ContentRight>
    </Container>
  );

}

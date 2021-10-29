import styled from "styled-components";

interface typeSection{
  type: string;
}

export const SectionContainer = styled.section<typeSection>`
  border: 1px solid #ccc;
  margin-top: 20px;
   div:first-child {
    padding: 2px;
    background-color: ${props =>props.type === 'important' ? 'red' : 'var(--color-primary-200)' };
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    span{
      color: #fff;
      margin-left: 25px;
      font-size: 12px;
      text-transform: uppercase;
    }

    svg{
      width: 18px;
      height: 18px;
      color: #fff;
      margin-right: 5px;
    }

   }
`;

export const SectionContent = styled.div<typeSection>`
  padding: 10px 12px;
  color: #333;

  height: ${props => props.type === 'important' ? '380px' : '80px'};
  
  h1, h2, h3{
    font-weight: 500;
    color: #7A7F83;
  }

  a{
    color: var(--color-primary-50);

    :hover {
      text-decoration: underline;
      color: var(--color-primary-200);
    }
  }
  
  h1, h2, h3{
    font-size: 20px;
  
  }

  >a{
    font-size: 13px;
  }

  h2, h3{
    margin-top: 50px;
    margin-bottom: 10px;
  }

  >p{
    font-size: 13px;
    font-weight: 500;

    strong{
      font-size: 13px;
    }

    a{
      font-size: 13px;
    }
  }

  h3{
    display: inline-block;
    text-transform: uppercase;
    
    a{
      font-size: 20px;
      font-weight: 700;
    }
  }

 

`;
import styled from "styled-components";

export const SectionContainer = styled.section`
  border: 1px solid #ccc;

   div:first-child {
    padding: 2px;
    background-color: red;
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

export const SectionContent = styled.div`
  padding: 10px 12px;
  color: #333;

  height: 380px;
  
  h1, h2, h3{
    font-weight: 500;
  }

  
    


`;
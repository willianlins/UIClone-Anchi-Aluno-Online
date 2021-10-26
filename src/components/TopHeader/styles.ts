import styled from 'styled-components';
import '../../styles/global.css'


export const Container = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #afb4b9;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #ccc;
  
  span, strong{ 
   font-size: 0.813rem;
   color: #afb4b9;
  }

`;

export const ContentLeft = styled.div`
  width: 225px;
  height: 45px;
  padding: 10px;
  background-color: #e2e2e2;  
  text-transform: uppercase;
  display:flex;
  gap: 0.938rem;
  align-items: center;
  border-right: 1px solid #afb4b9;

  img { 
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  div{
    display:flex;
    flex-direction: column;
  }

  a{
    text-transform: none;
    font-size: 0.813rem;
    font-weight: 700;
    color: var(  --color-primary-50);
  }

  a:hover{
    text-decoration: underline;
  }

`;

export const ContentRight = styled.div`
  width: 320px;
  height: 45px;
  padding: 10px;
  display:flex;
  flex-direction:column;
  
  span:first-child {
    text-transform: uppercase;
  }

  background-color: #e2e2e2; 
`;
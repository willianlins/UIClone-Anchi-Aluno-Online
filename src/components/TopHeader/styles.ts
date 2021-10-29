import styled from 'styled-components';
import '../../styles/global.css'


export const Container = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #accc;
  display:flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  z-index: 99;

  span, strong{ 
   font-size: 0.813rem;
   color: #666666;
  }

`;

export const ContentLeft = styled.div`
  width: 225px;
  height: 40px;
  padding: 10px;
  text-transform: uppercase;
  display:flex;
  gap: 0.938rem;
  align-items: center;
  border-right: 1px solid #ccc;

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
    color: var(--color-primary-50);
  }

  a:hover{
    text-decoration: underline;
  }

`;

export const ContentRight = styled.div`
  width: 320px;
  height: 40px;
  padding: 10px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  margin-right: 60px;
  span:first-child {
    text-transform: uppercase;
  }

`;
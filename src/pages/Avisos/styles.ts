import styled from 'styled-components';
import '../../styles/global.css';

export const Container = styled.div`
  margin-top: 90px;
  float: left;
  width: calc(100vw - 275px);
  height: calc(100vh - 90px);
  overflow-y: auto; 
    /* scroll thumb and track */
  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;


export const Content = styled.div`
  width: 930px;
  float: left;
  margin-left: 28px;


  >h1{
    color:#333;
    font-weight: 400;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1px;
    font-size: 1.2rem;
  }

  >div {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    
    input{
      border: 0;
      font-size: 13px;
      margin-left: 5px;
      width: 100%;

      :focus{
        outline: 0;   
      }
    }

    svg{
      width: 35px;
      height: 20px;
    }
  }

`;

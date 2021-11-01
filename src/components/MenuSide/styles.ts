import styled from 'styled-components';
import '../../styles/global.css';

export const Container = styled.div`
  width: 275px;
  height: 100vh;
  background-color: var(--color-primary-200);
  color: #fff;
  z-index: 100;
  position: relative;
  float: left;

  svg{
    width: 25px;
    height: 25px;
    margin-top: 1rem;
    margin-left: 13px;
    cursor: pointer;
  }
`;

export const ContentImg = styled.div`
  width: 100%;
  height: 120px;

  img {
    width: 100%;
  }
`;

export const ContentMenu = styled.div`
  width: 100%;
  margin-top: 1rem; 
  
`;

export const BorderTopAndBottom = styled.div`
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
`;
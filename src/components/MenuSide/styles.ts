import styled from 'styled-components';
import '../../styles/global.css';

export const Container = styled.div`
  width: 275px;
  height: 100vh;
  background-color: var(--color-primary-200);
  color: #fff;
  position: fixed;
  z-index: 100;
`;

export const ContentImg = styled.div`
  width: 100%;
  height: 120px;

  img {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ContentMenu = styled.div`
  width: 100%;
  margin-top: 2rem; 
  
`;

export const BorderTopAndBottom = styled.div`
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
`;
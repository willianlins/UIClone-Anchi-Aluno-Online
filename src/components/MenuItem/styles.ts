import styled from 'styled-components';
import '../../styles/global.css';


export const ContentMenuSecudaryLi = styled.li`

   background: var(--color-primary-300);
  > a {
  padding: 0.625rem 0; 
  display: flex;
  font-size: 0.8125rem;
  transition: 0.3s;
  svg{
    width: 14px;
    height: 14px;
    margin-right: 1.25rem;
    margin-left: 2.8125rem ;
  }

  &:hover{
    background-color: var(--color-primary-50);
  }
}
`;
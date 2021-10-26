
import styled from 'styled-components';
import '../../styles/global.css';


interface ContentMenuMainProps {
  svgPropRotate: number;
}

interface ContentMenuSecudaryProps {
  visible: string;
}


export const ContentMenuMain = styled.ul<ContentMenuMainProps>` 
> li > div {
  padding: 0.75rem 0; 
  display: flex;
  position: relative;
  cursor: pointer;

  transition: 0.3s;

  svg{
    width: 18px;
    height: 18px;
  }

  svg:first-child {
    margin:0 20px;
  }

  svg:last-child {
    right: 0;
    position: absolute;
    margin-right: 0.625rem;
    transform: rotate(${props =>props.svgPropRotate}deg);
    transition: 0.6s;
  }

  &:hover{
    background-color: var(--color-primary-50);
    border-left: 3px solid var(--color-border-link-100);
  }
  
 }
`;

export const ContentMenuSecudary = styled.ul<ContentMenuSecudaryProps>`
 
 /* ${props => props.visible === 'none' ? `display: none;` : `display: block;  transition: all .3s linear;`} */

  display:${props => props.visible};
`;


import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';


import { ContentMenuMain, ContentMenuSecudary } from './styles';


interface MenuTitleProps {
  contentTitleMenu: string;
  icon: React.ComponentType;
  children: React.ReactNode;
  activeArrowDown?: boolean;
}

export function MenuTitle({ contentTitleMenu, icon: Icon, children,  activeArrowDown = true }: MenuTitleProps) {
  const [svgPropRotate, setSvgPropRotate] = useState(0);
  const [visible, setVisible] = useState('none');
  

  const isVisible = () => {
    visible === 'none' ? setVisible('block') : setVisible('none');
    svgPropRotate === 0 ? setSvgPropRotate(180) : setSvgPropRotate(0);
  }

  return (
    <ContentMenuMain svgPropRotate={svgPropRotate}>
      <li>
        <div onClick={isVisible}>
          <Icon />
          <span>{contentTitleMenu}</span>
          {activeArrowDown &&(<RiArrowDownSLine />)}
        </div>
        <ContentMenuSecudary visible={visible}>
          {children}
        </ContentMenuSecudary>
      </li>
    </ContentMenuMain>
  );
}

import {ContentMenuSecudaryLi } from './styles';

export interface MenuItemProps {
  itemTitle: string;
  link: string;
  iconItem: React.ComponentType;
}

export function MenuItem({ itemTitle, link, iconItem: IconItem }: MenuItemProps) {
  return (
    <>
      <ContentMenuSecudaryLi><a href={link}><IconItem />{itemTitle}</a></ContentMenuSecudaryLi>
    </>
  );
}
import React, { FC } from 'react';

import {
  CatItem,
  CatTitleWrap,
  CatTitleOverlay,
  CatTitle,
  CenteredWrap,
  CatIconWrap,
  CatBtn,
} from './Category.styled';

interface ICategoryItemsProps {
  children: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  id: string;
  active: string;
  toggle: Function;
}

export const Category: FC<ICategoryItemsProps> = ({
  children,
  icon,
  color,
  image,
  id,
  active,
  toggle,
}) => {
  const activeItem = id === active;

  return (
    <CatItem open={activeItem} image={image} onClick={() => toggle(id)}>
      <CatTitleWrap open={activeItem}>
        <CatTitleOverlay>
          <CatTitle color={color}>{children}</CatTitle>
        </CatTitleOverlay>
      </CatTitleWrap>
      <CenteredWrap>
        <CatIconWrap open={activeItem} color={color}>
          {icon}
        </CatIconWrap>
        <CatBtn to={`/${id}`} open={activeItem} color={color}>
          {id}
        </CatBtn>
      </CenteredWrap>
    </CatItem>
  );
};

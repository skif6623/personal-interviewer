import React, { FC } from 'react';

import {
  ECategoryItem,
  ECategoryTitle,
  ETitleOverlay,
  ETitleWrap,
  EIconWrap,
  ECategoryBtn,
  ECenteredWrap,
} from './CategoryItem.styled';

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
    <ECategoryItem open={activeItem} image={image} onClick={() => toggle(id)}>
      <ETitleWrap open={activeItem}>
        <ETitleOverlay>
          <ECategoryTitle color={color}>{children}</ECategoryTitle>
        </ETitleOverlay>
      </ETitleWrap>
      <ECenteredWrap>
        <EIconWrap open={activeItem} color={color}>
          {icon}
        </EIconWrap>
        <ECategoryBtn to={`/${id}`} open={activeItem} color={color}>
          {id}
        </ECategoryBtn>
      </ECenteredWrap>
    </ECategoryItem>
  );
};

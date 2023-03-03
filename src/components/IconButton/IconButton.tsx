import React, { FC } from 'react';
import { EIconButton } from './IconButton.styled';

interface IIconBtnProps {
  label: string;
  children: React.ReactNode;
  color: string;
  // active: Function;
}

export const IconButton: FC<IIconBtnProps> = ({
  label,
  children,
  color,
  // active,
}) => {
  return (
    <EIconButton aria-label={label} color={color}>
      {children}
    </EIconButton>
  );
};

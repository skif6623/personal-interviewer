import React, { FC } from 'react';
import { Button } from './IconButton.styled';

interface IIconBtnProps {
  label: string;
  children: React.ReactNode;
  color: string;
}

export const IconButton: FC<IIconBtnProps> = ({ label, children, color }) => {
  return (
    <Button aria-label={label} color={color}>
      {children}
    </Button>
  );
};

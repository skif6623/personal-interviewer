import React, { FC } from 'react';
import { EAnswerTitle } from './AnswerTitle.styled';

interface AnswerTitleProps {
  children: React.ReactNode;
}

export const AnswerTitle: FC<AnswerTitleProps> = ({ children }) => {
  return <EAnswerTitle color="blue">{children}</EAnswerTitle>;
};

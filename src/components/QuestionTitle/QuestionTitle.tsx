import React, { FC } from 'react';
import { EQuestTitle } from './QuestionTitle.styled';

interface QuestionTitleProps {
  children: React.ReactNode;
  color: string;
  margin?: string;
}

export const QuestionTitle: FC<QuestionTitleProps> = ({
  children,
  color,
  margin,
}) => {
  return (
    <EQuestTitle marginValue={margin} color={color}>
      {children}
    </EQuestTitle>
  );
};

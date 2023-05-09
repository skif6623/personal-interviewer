import React, { FC, Fragment } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectFilter } from '../../redux/selectors';
import { Accordion } from '../Accordion/Accordion';
import { QuestListTitle, QuestItem, QuestList } from './QuestionsList.styled';
import { IQItem, IQuestParams } from '../../types/componentTypes/types';
import { getVisibleQuestions } from '../../utils/functions';

interface IQuestionListProps {
  title?: string;
  questParams: IQuestParams;
}

export const QuestionsList: FC<IQuestionListProps> = ({
  title,
  questParams,
}) => {
  const filter: string = useAppSelector(selectFilter);
  const visibleQuestions = getVisibleQuestions(filter, questParams);
  return (
    <>
      <QuestListTitle>{title}</QuestListTitle>
      <QuestList>
        {visibleQuestions.map(({ id, question, answer }: IQItem, index) => {
          const rows = answer.split('\n');
          const formatedAnswer = rows.map((row: any, position: any) => (
            <Fragment key={position}>
              {row}
              {position !== rows.length - 1 && <br />}
            </Fragment>
          ));
          return (
            <QuestItem key={id}>
              <Accordion
                id={id}
                index={index}
                color={questParams.color}
                question={question}
                answer={formatedAnswer}
              />
            </QuestItem>
          );
        })}
      </QuestList>
    </>
  );
};

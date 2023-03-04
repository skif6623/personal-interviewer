import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectFilter } from '../../redux/selectors';
import { SimpleAccordion } from '../Accordion/Accordion';
import { ETitle, EQuestItem, EQuestList } from './QuestionsList.styled';
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
      <ETitle>{title}</ETitle>
      <EQuestList>
        {visibleQuestions.map(({ id, question, answer }: IQItem) => {
          return (
            <EQuestItem key={id}>
              <SimpleAccordion
                color={questParams.color}
                question={question}
                answer={answer}
              />
            </EQuestItem>
          );
        })}
      </EQuestList>
    </>
  );
};

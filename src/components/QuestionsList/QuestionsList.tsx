import { FC } from 'react';
import { useState } from 'react';
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
  const [activeAnswer, setActiveAnswer] = useState<string>('-1');
  const filter: string = useAppSelector(selectFilter);
  const visibleQuestions = getVisibleQuestions(filter, questParams);

  const toggleAnswer = (id: string): void => {
    if (id === activeAnswer) {
      setActiveAnswer('-1');
      return;
    }
    setActiveAnswer(id);
  };

  return (
    <>
      <ETitle>{title}</ETitle>
      <EQuestList>
        {visibleQuestions.map(({ id, question, answer }: IQItem) => {
          return (
            <EQuestItem key={id} onClick={() => toggleAnswer(id)}>
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

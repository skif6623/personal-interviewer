import React, { FC, useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectQuestions } from '../../redux/selectors';
import { Box, Container } from '@mui/system';
import { QuestionTitle } from '../../components/QuestionTitle/QuestionTitle';
import { AnswerTitle } from '../../components/AnswerTitle/AnswerTitle';
import { IconButton } from '../../components/IconButton/IconButton';
import { getRandomNumber } from '../../utils/functions';
import {
  ERandomMain,
  ERandomWrapper,
  ERandomButton,
  EIconButtonWrapper,
} from './RandomQuestionPage.styled';

import { HiOutlineCheck } from 'react-icons/hi';
import { MdWarningAmber } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';

export const RandomQuestionPage: FC = () => {
  const questions = useAppSelector(selectQuestions);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<string>('');

  console.log('activeBtn:', activeBtn);

  useEffect(() => {
    setRandomNumber(getRandomNumber(0, questions.length));
  }, [questions.length]);

  return (
    <ERandomMain>
      <Container>
        <ERandomWrapper>
          <Box>
            <QuestionTitle>{questions[randomNumber].question}</QuestionTitle>
            <AnswerTitle>{questions[randomNumber].answer}</AnswerTitle>
          </Box>
          <Box>
            <EIconButtonWrapper>
              <IconButton
                active={setActiveBtn}
                color="#d81f1f"
                label="don't-know"
              >
                <BsQuestion size={30} />
              </IconButton>
              <IconButton active={setActiveBtn} color="#e2e24c" label="doubt">
                <MdWarningAmber size={30} />
              </IconButton>
              <IconButton active={setActiveBtn} color="#5eaf5e" label="know">
                <HiOutlineCheck size={30} />
              </IconButton>
            </EIconButtonWrapper>

            <ERandomButton
              type="button"
              onClick={() =>
                setRandomNumber(getRandomNumber(0, questions.length))
              }
            >
              Next
            </ERandomButton>
          </Box>
        </ERandomWrapper>
      </Container>
    </ERandomMain>
  );
};

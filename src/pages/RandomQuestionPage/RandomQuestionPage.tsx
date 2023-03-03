import React, { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { isShowSearch } from '../../redux/serviseSlice';
import { selectQuestions } from '../../redux/selectors';
import { Box, Container } from '@mui/system';
import { IconButton } from '../../components/IconButton/IconButton';
import { getRandomNumber, getSortedQuestions } from '../../utils/functions';
import {
  ERandomMain,
  ERandomWrapper,
  ERandomButton,
  EIconButtonWrapper,
  EAnswer,
  EQuestion,
} from './RandomQuestionPage.styled';

import { HiOutlineCheck } from 'react-icons/hi';
import { MdWarningAmber } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';

export const RandomQuestionPage: FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  // const [activeBtn, setActiveBtn] = useState<string>('');
  const questions = useAppSelector(selectQuestions);
  const sortedQuestions = getSortedQuestions(
    questions,
    questions[randomNumber].category
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isShowSearch('select'));
    setRandomNumber(getRandomNumber(0, questions.length));
  }, [dispatch, questions.length]);

  return (
    <ERandomMain>
      <Container>
        <ERandomWrapper>
          <Box>
            <EQuestion color={sortedQuestions?.color}>
              {questions[randomNumber].question}
            </EQuestion>
            <EAnswer>{questions[randomNumber].answer}</EAnswer>
          </Box>
          <Box>
            <EIconButtonWrapper>
              <IconButton
                // active={setActiveBtn}
                color="#d81f1f"
                label="don't-know"
              >
                <BsQuestion size={30} />
              </IconButton>
              <IconButton
                // active={setActiveBtn}
                color="#e2e24c"
                label="doubt"
              >
                <MdWarningAmber size={30} />
              </IconButton>
              <IconButton
                // active={setActiveBtn}
                color="#5eaf5e"
                label="know"
              >
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

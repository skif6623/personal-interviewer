import React, { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { isShowSearch } from '../../redux/serviseSlice';
import { selectQuestions, selectSelector } from '../../redux/selectors';
import { Box, Container } from '@mui/system';
import { IconButton } from '../../components/IconButton/IconButton';
import {
  getRandomNumber,
  getSortedQuestions,
  getSelectedCategory,
} from '../../utils/functions';
import {
  ERandomMain,
  ERandomWrapper,
  ERandomButton,
  EIconButtonWrapper,
  EAnswer,
  EQuestion,
  EAnswerOverlay,
  EAnswerSubtitle,
} from './RandomQuestionPage.styled';

import { HiOutlineCheck } from 'react-icons/hi';
import { MdWarningAmber } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';

export const RandomQuestionPage: FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const questions = useAppSelector(selectQuestions);
  const categories = useAppSelector(selectSelector);

  const selectedCategories = getSelectedCategory(questions, categories);

  const sortedQuestions = getSortedQuestions(
    questions,
    questions[randomNumber].category
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isShowSearch('select'));
    setRandomNumber(getRandomNumber(0, selectedCategories.length));
  }, [dispatch, selectedCategories.length]);

  return (
    <ERandomMain>
      <Container>
        <ERandomWrapper>
          <Box>
            <EQuestion color={sortedQuestions?.color}>
              {questions[randomNumber].question}
            </EQuestion>
            <EAnswer isOpen={isOpen}>
              {questions[randomNumber].answer}
              <EAnswerOverlay isOpen={isOpen}>
                <EAnswerSubtitle onClick={() => setIsOpen(true)}>
                  Show right answer
                </EAnswerSubtitle>
              </EAnswerOverlay>
            </EAnswer>
          </Box>
          <Box>
            <EIconButtonWrapper>
              <IconButton color="#d81f1f" label="don't-know">
                <BsQuestion size={30} />
              </IconButton>
              <IconButton color="#e2e24c" label="doubt">
                <MdWarningAmber size={30} />
              </IconButton>
              <IconButton color="#5eaf5e" label="know">
                <HiOutlineCheck size={30} />
              </IconButton>
            </EIconButtonWrapper>

            <ERandomButton
              type="button"
              onClick={() => {
                setRandomNumber(getRandomNumber(0, questions.length));
                setIsOpen(false);
              }}
            >
              Next
            </ERandomButton>
          </Box>
        </ERandomWrapper>
      </Container>
    </ERandomMain>
  );
};

import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { isShowSearch } from '../../redux/serviseSlice';
import { changeNumber } from '../../redux/selectorSlice';
import {
  selectQuestions,
  selectSelector,
  selectRandomNumber,
} from '../../redux/selectors';
import { Box, Container } from '@mui/system';
import { IconButton } from '../../components/IconButton/IconButton';
import {
  getRandomNumber,
  getSortedQuestions,
  getSelectedCategory,
} from '../../utils/functions';
import {
  RandomMain,
  RandomWrapper,
  RandomButton,
  IconButtonWrapper,
  RandomAnswer,
  RandomQuestion,
  RandomAnswerOverlay,
  RandomAnswerSubtitle,
} from './RandomQuestionPage.styled';

import { HiOutlineCheck } from 'react-icons/hi';
import { MdWarningAmber } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';

export const RandomQuestionPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectQuestions);
  const categories = useAppSelector(selectSelector);
  const randomNumber = useAppSelector(selectRandomNumber);

  const visibleCategories = getSelectedCategory(questions, categories);
  const getCategoryColor = getSortedQuestions(
    visibleCategories,
    visibleCategories[randomNumber].category
  );

  useEffect(() => {
    dispatch(isShowSearch('select'));
    dispatch(changeNumber(getRandomNumber(0, visibleCategories.length - 1)));
  }, [dispatch, visibleCategories.length]);

  return (
    <RandomMain>
      <Container>
        <RandomWrapper>
          <Box>
            <RandomQuestion color={getCategoryColor?.color}>
              {visibleCategories[randomNumber].question}
            </RandomQuestion>
            <RandomAnswer isOpen={isOpen}>
              {visibleCategories[randomNumber].answer}
              <RandomAnswerOverlay isOpen={isOpen}>
                <RandomAnswerSubtitle onClick={() => setIsOpen(true)}>
                  Show right answer
                </RandomAnswerSubtitle>
              </RandomAnswerOverlay>
            </RandomAnswer>
          </Box>
          <Box>
            <IconButtonWrapper>
              <IconButton color="#d81f1f" label="don't-know">
                <BsQuestion size={30} />
              </IconButton>
              <IconButton color="#e2e24c" label="doubt">
                <MdWarningAmber size={30} />
              </IconButton>
              <IconButton color="#5eaf5e" label="know">
                <HiOutlineCheck size={30} />
              </IconButton>
            </IconButtonWrapper>

            <RandomButton
              type="button"
              onClick={() => {
                dispatch(
                  changeNumber(getRandomNumber(0, visibleCategories.length - 1))
                );
                setIsOpen(false);
              }}
            >
              Next
            </RandomButton>
          </Box>
        </RandomWrapper>
      </Container>
    </RandomMain>
  );
};

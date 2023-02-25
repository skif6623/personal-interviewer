import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { isShowSearch } from '../../redux/serviseSlice';
import { fetchQuestions } from '../../redux/operations';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectQuestions } from '../../redux/selectors';

import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import { Container } from '@mui/system';

import { EMain } from './ActiveCategoryPage.styled';

import { getSortedQuestions } from '../../utils/functions';
import { IQItem } from '../../types/componentTypes/types';

export const ActiveCategoryPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const questions: IQItem[] = useAppSelector(selectQuestions);
  const questParams = getSortedQuestions(questions, id)!;

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(isShowSearch(true));
  }, [dispatch]);

  return (
    <EMain image={questParams.bg}>
      <Container>
        <QuestionsList questParams={questParams} title={id} />
      </Container>
    </EMain>
  );
};

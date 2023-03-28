import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { isShowSearch } from '../../redux/serviseSlice';
import { fetchQuestions } from '../../redux/operations';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectQuestions } from '../../redux/selectors';

import { QuestionsList } from '../../components/QuestionsList/QuestionsList';
import { Container } from '@mui/system';

import { Main } from './ActiveCategoryPage.styled';

import { getSortedQuestions } from '../../utils/functions';

export const ActiveCategoryPage: FC = () => {
  const questions = useAppSelector(selectQuestions);
  const { id } = useParams();
  const questParams = getSortedQuestions(questions, id)!;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(isShowSearch('search'));
  }, [dispatch]);

  return (
    <Main image={questParams.bg}>
      <Container>
        <QuestionsList questParams={questParams} title={id} />
      </Container>
    </Main>
  );
};

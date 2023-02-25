import { CategoryList } from '../components/CategoryList/CategoryList';

import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { isShowSearch } from '../redux/serviseSlice';
import { fetchQuestions } from '../redux/operations';

export const CategoryPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(isShowSearch(false));
  }, [dispatch]);

  return (
    <main>
      <CategoryList />
    </main>
  );
};

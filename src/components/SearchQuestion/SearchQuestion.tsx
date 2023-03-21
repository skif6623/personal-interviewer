import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

import { SearchInput } from './SearchQuestion.styled';

interface ISearchQuestionProps {
  color?: string;
}

export const SearchQuestion: FC<ISearchQuestionProps> = ({ color }) => {
  console.log(color);
  const inputValue = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <SearchInput
        type="text"
        id="filter"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />
    </>
  );
};

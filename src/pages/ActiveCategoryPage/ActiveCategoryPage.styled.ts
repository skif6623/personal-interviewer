import styled from '@emotion/styled';
import { IActiveCategoryProps } from '../../types/emotionTypes';

export const Main = styled.main`
  min-height: 100vh;
  padding-top: 70px;

  background-image: ${({ image }: IActiveCategoryProps) =>
    image && `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

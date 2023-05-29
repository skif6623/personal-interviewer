import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  height: 40px;
  margin-right: 16px;

  color: #f46a3b;

  transition: color 250ms ease;

  :hover,
  :focus {
    color: #da5d33;
  }
`;

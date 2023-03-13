import { Accordion } from '@mui/material';
import styled from '@emotion/styled';

export const EAccordion = styled(Accordion)`
  min-height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 250ms ease;
  :hover {
    transform: scale(1.02);
  }
`;

import styled from '@emotion/styled';
import { Accordion } from '@mui/material';

export const AccordionWrapper = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 65px;

  transition: transform 250ms ease;

  :hover {
    transform: scale(1.02);
  }
`;

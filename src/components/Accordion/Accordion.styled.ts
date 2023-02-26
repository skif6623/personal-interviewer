import { Accordion } from '@mui/material';
import styled from '@emotion/styled';

export const EAccordion = styled(Accordion)`
  transition: transform 250ms ease;
  :hover {
    transform: scale(1.02);
  }
`;

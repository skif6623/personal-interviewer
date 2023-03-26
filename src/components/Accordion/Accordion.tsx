import React, { FC } from 'react';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { AccordionWrapper } from './Accordion.styled';

interface IAccordionProps {
  question: string;
  answer: string;
  color?: string;
  index: number;
}

export const Accordion: FC<IAccordionProps> = ({
  answer,
  question,
  color,
  index,
}) => {
  const sequenceNumber = index + 1;

  return (
    <>
      <AccordionWrapper>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: { color } }}>
            {sequenceNumber}. {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </AccordionWrapper>
    </>
  );
};

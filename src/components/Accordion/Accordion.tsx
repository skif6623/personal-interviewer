import React, { FC } from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { EAccordion } from './Accordion.styled';

interface IAccordionProps {
  question: string;
  answer: string;
  color?: string;
}

export const SimpleAccordion: FC<IAccordionProps> = ({
  answer,
  question,
  color,
}) => {
  return (
    <div>
      <EAccordion
        sx={{
          minHeight: '65px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: { color } }}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </EAccordion>
    </div>
  );
};

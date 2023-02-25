import React, { FC, useState, useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box, Container } from '@mui/system';
import { QuestionTitle } from '../components/QuestionTitle/QuestionTitle';
import { AnswerTitle } from '../components/AnswerTitle/AnswerTitle';
import { selectQuestions } from '../redux/selectors';

export const RandomRepeatPage: FC = () => {
  const questions = useAppSelector(selectQuestions);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  console.log(randomNumber);

  useEffect(() => {
    setRandomNumber(handleRandomNumber(0, questions.length));
  }, [questions.length]);

  function handleRandomNumber(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  return (
    <main style={{ marginTop: '80px' }}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <QuestionTitle color="blue">
              {questions[randomNumber].question}
            </QuestionTitle>
            <AnswerTitle>{questions[randomNumber].answer}</AnswerTitle>
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <button type="button">B</button>
              <button type="button">N</button>
              <button type="button">G</button>
            </Box>

            <button
              style={{
                display: 'block',
                margin: '0 auto',
              }}
              type="button"
              onClick={() =>
                setRandomNumber(handleRandomNumber(0, questions.length))
              }
            >
              Отримати питання
            </button>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

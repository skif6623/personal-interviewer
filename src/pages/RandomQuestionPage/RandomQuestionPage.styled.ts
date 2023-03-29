import styled from '@emotion/styled';
import { IRandomQuestionProps } from '../../types/emotionTypes';

export const RandomMain = styled.main`
  background-image: url('https://cdn.pixabay.com/photo/2019/07/11/15/34/luck-4330900_960_720.jpg');
  background-position: -300px 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (min-width: 1100px) {
    background-position: 0 0;
  }
`;

export const RandomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  padding-bottom: 30px;
`;

export const RandomQuestion = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 0 15px;
  min-height: 65px;

  font-family: 'Roboto';
  text-align: center;
  color: ${({ color }) => (color ? color : '#000000')};

  background-color: white;
  border-radius: 50px;
`;

export const RandomAnswer = styled.div`
  max-height: calc(100vh - 385px);
  margin-top: 30px;
  padding: 20px;

  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: calc(16 / 24);

  background: rgba(233, 233, 233, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  overflow-y: ${({ isOpen }: IRandomQuestionProps) =>
    isOpen ? 'scroll' : 'hidden'};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5d5d5d;
    border-radius: 50px;
  }
`;

export const RandomAnswerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  background-color: rgba(233, 233, 233, 0.9);
  backdrop-filter: blur(10px);
  opacity: ${({ isOpen }: IRandomQuestionProps) => (isOpen ? '0' : '1')};

  transition: opacity 500ms ease;
`;

export const RandomAnswerSubtitle = styled.p`
  padding: 10px 20px;

  text-align: center;
  color: #ffffff;

  background-color: #5eaf5e;
  border-radius: 50px;
  cursor: pointer;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  max-width: 350px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 30px;

  background: rgba(233, 233, 233, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 50px;
`;

export const RandomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 43px;

  text-decoration: none;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #ffffff;

  background: rgba(233, 233, 233, 0.4);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 4px;

  transition: box-shadow 250ms ease;

  :hover {
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

import styled from '@emotion/styled';

export const EAnswerTitle = styled.p`
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  border: ${({ color }) =>
    color ? `2px solid ${color}` : '2px solid #000000'};
  border-radius: 10px;
`;

import styled from '@emotion/styled';

interface IQuestTitleProps {
  marginValue?: string;
  color: string;
}

export const EQuestTitle = styled.h3`
  display: flex;
  align-items: center;
  min-height: 65px;
  margin-bottom: ${({ marginValue }: IQuestTitleProps) =>
    marginValue ? marginValue : '0'};
  padding: 10px;
  color: ${({ color }) => (color ? color : '#000000')};
  background-color: #ffffff;
`;

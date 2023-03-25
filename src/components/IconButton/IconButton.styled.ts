import styled from '@emotion/styled';

interface IIconButtonProps {
  color: string;
}

export const EIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  color: #ffffff;
  background-color: #5d5d5d;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: ${({ color }: IIconButtonProps) =>
      color ? color : '#644e4e'};
  }
`;

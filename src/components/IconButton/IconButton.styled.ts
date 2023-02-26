import styled from '@emotion/styled';

interface IIconButtonProps {
  color: string;
}

export const EIconButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #644e4e;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: ${({ color }: IIconButtonProps) =>
      color ? color : '#644e4e'};
  }
`;

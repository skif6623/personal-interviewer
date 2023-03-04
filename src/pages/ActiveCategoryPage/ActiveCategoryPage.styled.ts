import styled from '@emotion/styled';

interface IETypes {
  image: string;
}

export const EMain = styled.main`
  min-height: 100vh;
  padding-top: 70px;
  background-image: url(${({ image }: IETypes) => (image ? image : null)});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

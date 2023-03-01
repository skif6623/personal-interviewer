import styled from '@emotion/styled';

export const ERandomMain = styled.main`
  background-image: url('https://cdn.pixabay.com/photo/2019/07/11/15/34/luck-4330900_960_720.jpg');
  background-position: -300px 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  @media (min-width: 1100px) {
    background-position: 0 0;
  }
`;
export const ERandomWrapper = styled.div`
  min-height: calc(100vh - 56px);
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EQuestion = styled.h3`
  margin-top: 30px;
  padding: 0 15px;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto';
  text-align: center;
  color: ${({ color }) => (color ? color : '#000000')};

  background-color: white;
  border-radius: 50px;
`;

export const EAnswer = styled.p`
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
  overflow-y: scroll;

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

export const EIconButtonWrapper = styled.div`
  max-width: 350px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;

  background: rgba(233, 233, 233, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 50px;
`;

export const ERandomButton = styled.button`
  margin: 0 auto;
  padding: 20px 43px;

  display: flex;
  justify-content: center;
  align-items: center;

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

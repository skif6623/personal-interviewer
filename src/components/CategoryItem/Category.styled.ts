import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ICategoryProps } from '../../types/emotionTypes';

export const CatItem = styled.li`
  position: relative;

  display: flex;
  height: ${({ open }: ICategoryProps) =>
    open ? 'calc(100vh - 416px)' : '90px'};
  padding: 15px;

  background-image: ${({ image }: ICategoryProps) => image && `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;

  transition: height 500ms ease;

  overflow: hidden;
`;

export const CatTitleWrap = styled.div`
  height: 100%;

  pointer-events: ${({ open }) => (open ? 'none' : 'auto')};
  opacity: ${({ open }: ICategoryProps) => (open ? '0' : '1')};

  transition: opacity 500ms ease;
`;

export const CatTitleOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 10px 15px;

  background-color: white;
  border-radius: 20px;
`;

export const CatTitle = styled.h3`
  text-transform: uppercase;
  color: ${({ color }: ICategoryProps) => (color ? color : 'black')};
`;

export const CenteredWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  transform: translate(-50%, -50%);
`;

export const CatIconWrap = styled.div`
  position: relative;
  top: ${({ open }: ICategoryProps) => (open ? '0' : '-100px')};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;

  color: ${({ color }) => (color ? color : '#000000')};
  background-color: #ffffff;
  border-radius: 50%;
  opacity: ${({ open }: ICategoryProps) => (open ? '1' : '0')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

  transition: all 500ms ease 250ms;
`;

export const CatBtn = styled(Link)`
  position: relative;
  bottom: ${({ open }: ICategoryProps) => (open ? '0' : '-100px')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 43px;

  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.3;

  color: #ffffff;
  background-color: rgba(233, 233, 233, 0.4);
  backdrop-filter: blur(10px);
  border: ${({ color }) => (color ? `2px solid ${color}` : '2px solid black')};
  border-radius: 4px;
  opacity: ${({ open }: ICategoryProps) => (open ? '1' : '0')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

  transition: bottom 500ms ease 250ms, opacity 500ms ease 250ms,
    box-shadow 250ms ease;

  :hover {
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

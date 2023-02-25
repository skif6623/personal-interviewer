import { FC } from 'react';
import { MainAppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <MainAppBar />
      <Outlet />
    </>
  );
};

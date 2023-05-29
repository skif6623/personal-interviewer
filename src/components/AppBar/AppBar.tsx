import { Logo } from '../Logo/Logo';
import { AppBar, Toolbar } from '@mui/material';

import { useAppSelector } from '../../hooks/hooks';
import { selectServise } from '../../redux/selectors';

import { SearchQuestion } from '../SearchQuestion/SearchQuestion';
import { CategorySelector } from '../CategorySelector/CategorySelector';

export const MainAppBar = () => {
  const showSearch = useAppSelector(selectServise);

  return (
    <>
      <AppBar position={showSearch === 'search' ? 'fixed' : 'static'}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo size={40} />
          {showSearch === 'search' && <SearchQuestion />}
          {showSearch === 'select' && <CategorySelector />}
        </Toolbar>
      </AppBar>
    </>
  );
};

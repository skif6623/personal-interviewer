import { TbBrandJavascript } from 'react-icons/tb';
import { AppBar, Toolbar } from '@mui/material';

import { useAppSelector } from '../../hooks/hooks';
import { selectServise } from '../../redux/selectors';

import { SearchQuestion } from '../SearchQuestion/SearchQuestion';
import { CategorySelector } from '../CategorySelector/CategorySelector';
import { Link } from 'react-router-dom';

export const MainAppBar = () => {
  const showSearch = useAppSelector(selectServise);

  return (
    <>
      <AppBar position={showSearch === 'search' ? 'fixed' : 'static'}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/">
            <TbBrandJavascript size={40} color="white" />
          </Link>
          {showSearch === 'search' && <SearchQuestion />}
          {showSearch === 'select' && <CategorySelector />}
        </Toolbar>
      </AppBar>
    </>
  );
};

import { AppBar, Toolbar, Box } from '@mui/material';
import { TbBrandJavascript } from 'react-icons/tb';

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
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <TbBrandJavascript size={40} />
          </Box>
          {showSearch === 'search' && <SearchQuestion />}
          {showSearch === 'select' && <CategorySelector />}
        </Toolbar>
      </AppBar>
    </>
  );
};

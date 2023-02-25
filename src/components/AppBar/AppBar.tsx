import { AppBar, Toolbar, Box } from '@mui/material';
import { TbBrandJavascript } from 'react-icons/tb';
import { SearchQuestion } from '../SearchQuestion/SearchQuestion';
import { useAppSelector } from '../../hooks/hooks';
import { selectServise } from '../../redux/selectors';

export const MainAppBar = () => {
  const showSearch = useAppSelector(selectServise);

  return (
    <>
      <AppBar position={showSearch ? 'fixed' : 'static'}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <TbBrandJavascript size={40} />
          </Box>
          {showSearch && <SearchQuestion />}
        </Toolbar>
      </AppBar>
    </>
  );
};

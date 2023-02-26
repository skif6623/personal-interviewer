import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { CategoryPage } from './pages/CategoryPage';
import { RandomQuestionPage } from './pages/RandomQuestionPage/RandomQuestionPage';
import { ActiveCategoryPage } from './pages/ActiveCategoryPage/ActiveCategoryPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CategoryPage />} />
        <Route path="/:id" element={<ActiveCategoryPage />} />
        <Route path="/random" element={<RandomQuestionPage />} />
      </Route>
    </Routes>
  );
};

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePages from './pages/HomePage';
import UsersPages from './pages/UsersPage';
import AddPage from './pages/AddPages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/add" element={<AddPage />} />
      </Route>
    </Routes>
  );
};

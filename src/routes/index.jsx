import { Route, Routes } from 'react-router-dom';

import { routes } from 'src/constants/routes';
import Home from '../screens/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
}

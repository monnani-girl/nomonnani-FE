import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from '../pages/result';
import Test from './test';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

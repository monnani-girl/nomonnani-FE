import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './test';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

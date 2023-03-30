import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Result from '../pages/result';
import Select from '../pages/select';
import Test from './test';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

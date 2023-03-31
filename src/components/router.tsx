import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Result from '../pages/result';
import Select from '../pages/select';
import WebcamCapture from './WebcamCapture';
import Test from './test';
import ResultStyle from '../pages/result-style';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/select" element={<Select />} />
        <Route path="/upload" element={<WebcamCapture />} />
        <Route path="/result-style" element={<ResultStyle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

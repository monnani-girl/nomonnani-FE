import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoShare from './kakaoShare';
import Test from './test';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/share" element={<KakaoShare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Result from '../pages/result';
import Select from '../pages/select';
import RouteChangeTracker from './RouteChangeTracker';

function Router() {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/select/:step" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import Router from './components/router';
import { GlobalStyle } from './style/global';
import './style/color.css';
import RouteChangeTracker from './utils/RouteChangeTracker';

function App() {
  // RouteChangeTracker();
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

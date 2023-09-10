import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './routers';
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

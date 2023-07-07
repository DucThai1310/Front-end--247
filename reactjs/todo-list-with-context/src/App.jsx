import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideBar from './components/Sidebar';
import { Router } from './router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

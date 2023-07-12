import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './router';
import { TaskContextProvider } from './context';

function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { createTodo } from './redux/slices';
import { RootState } from './redux/store';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { todo } = useSelector((state: RootState) => state.todo);
  useEffect(() => {
    dispatch(createTodo({ id: 'sas', name: 'adad' }));
  }, []);
  return (
    <div>
      <Header text='this is Header' color='blue' />
    </div>
  );
}

export default App;

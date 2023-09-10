import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './redux';
// import { createStore } from 'redux';

// const createStoreCustom = (reducer, defaultValue = undefined) => {
//   const subscribers = [];
//   let state = defaultValue;
//   const subscribe = subscriber => {
//     subscribers.push(subscriber);
//   };
//   const getState = () => {
//     return state;
//   };
//   const dispatch = action => {
//     state = reducer(state, action);
//     subscribers.forEach(subscriber => subscriber());
//   };
//   return {
//     subscribe,
//     getState,
//     dispatch,
//   };
// };
// function counterReducer(state = 0, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { ...state, value: state.value + 1 };
//     case 'counter/decremented':
//       return { ...state, value: state.value - 1 };
//     default:
//       return state;
//   }
// }
// let store = createStore(counterReducer, { value: 0, value2: 10 });

// store.subscribe(() => {
//   console.log('state changed:', store.getState());
// });

function App() {
  const dispatch = useDispatch();
  const state = useSelector( state => state );
  const count = useSelector(state=>state.counter)
  // const [ count, setCount ] = useState( 0 );

  // useEffect(() => {
  //   store.subscribe(() => {
  //     setCount(store.getState().value);
  //   });
  // }, []);

  // const incremented = () => {
  //   store.dispatch({ type: 'counter/incremented' });
  // };
  // const decremented = () => {
  //   store.dispatch({ type: 'counter/decremented',paload:"    " });
  // };

  const counter = () => {
    dispatch(incremented(2));
  };
  const unCounter = () => {
    dispatch(decremented());
  };

  return (
    <div>
      <span>{count.value}</span>
      <button onClick={counter}>incremented</button>
      <button onClick={unCounter}>decremented</button>
    </div>
  );
}

export default App;

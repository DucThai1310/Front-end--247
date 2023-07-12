import { useState } from 'react';

export const useReducerCustom = (reducer, initial) => {
  const [state, setState] = useState(initial);
  const dispatch = action => {
    const newState = reducer(state, action);
    setState(newState);
  };
  return [state, dispatch];
};

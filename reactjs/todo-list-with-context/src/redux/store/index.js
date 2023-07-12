import { createStore } from 'redux';
import { taskReducer } from '../reducer';
const createStoreCustom = reducer => {
  const subscribers = [];
  let state = reducer(undefined, {});
  return {
    dispatch: value => {
      state = reducer(state, value);
      subscribers.forEach(subscriber => {
        subscriber();
      });
    },
    subscribe: subscriber => {
      subscribers.push(subscriber);
    },
    getState: () => {
      return state;
    },
  };
};

const store = createStoreCustom(taskReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.subscribe(() => {
  console.log('asasa');
});
export const dispatch = value => {
  store.dispatch(value);
};

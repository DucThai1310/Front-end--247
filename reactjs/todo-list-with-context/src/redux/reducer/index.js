const initialState = [];
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      const taskClone = [...state];
      const taskIdx = state.findIndex(state => action.payload == state.id);
      if (taskIdx > -1) {
        taskClone.splice(taskIdx, 1);
      }
      return taskClone;

    default:
      return state;
  }
};

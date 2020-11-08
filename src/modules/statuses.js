export const UPDATE_STATUS = 'locations/UPDATE_STATUS'; 

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) { 
    case UPDATE_STATUS: {
      const { name, checkboxes } = action.payload;
      return {
        ...state,
        [name]: checkboxes 
      };
    }
    default: 
      return state;
  }
};

export const updateStatus = (name, index, checkboxes = []) => { 
  const copy = [...checkboxes]; 
  const currentFlag = checkboxes[index];
  copy[index] = !currentFlag;
  return {
    type: UPDATE_STATUS,
    payload: {
      name,
      checkboxes: copy
    }
  };
};
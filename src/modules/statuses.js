export const UPDATE_STATUS = 'locations/UPDATE_STATUS'; 
export const CLEAN_STATUS = 'locations/CLEAN_STATUS'; 

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
    case CLEAN_STATUS: {
      return initialState;
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

export const cleanStatuses = () => {
  const qestion = window.confirm("Вы уверены, что хотите полностью очистить лист?");
  if (qestion) {
    return {
      type: CLEAN_STATUS
    }    
  }
}
import React, {  useReducer, useContext } from 'react';
import {
  DISPLAY_ALERT,
} from './actions';

import reducer from './reducer';
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
      
    </AppContext.Provider>
  );
};
// make sure use
const useAppContext = () => {
    return useContext(AppContext);
  };
  
  
export { AppProvider, initialState, useAppContext };



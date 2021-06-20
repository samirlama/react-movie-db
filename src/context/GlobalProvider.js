import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

const initialState = {
  watchList: localStorage.getItem('watchList') !== null ? JSON.parse(localStorage.getItem('watchList')) : [],
  watched: localStorage.getItem('watched') !== null ? JSON.parse(localStorage.getItem('watched')) : []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  const addWatchList = (movie) => {
    dispatch({
      type: 'ADD_WATCH_LIST',
      payload: movie
    })
  };

  return(
    <GlobalContext.Provider value={{ watchList: state.watchList, watched: state.watched, addWatchList }}>
      { children }
    </GlobalContext.Provider>
  )
}
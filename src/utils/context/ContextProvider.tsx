import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';
import { Actions } from '../reducer/actions';

interface ContextType {
  mainColor: string;
  lang: string;
  changeMainColor: (color: string) => void;
  changeLang: () => void;
  changeIndexMainProject: () => void;
}

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [{ mainColor, lang, indexMainProject }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const changeMainColor = (color: string) => {
    dispatch({
      type: Actions.CHANGE_MAIN_COLOR,
      payload: color,
    });
  };
  const changeIndexMainProject = (index: number) => {
    dispatch({
      type: Actions.CHANGE_INDEX_MAIN_PROJECT,
      payload: index,
    });
  };
  const changeLang = () => {
    dispatch({
      type: Actions.CHANGE_LANG,
    });
  };

  const value: ContextType = {
    mainColor,
    lang,
    indexMainProject,
    changeMainColor,
    changeIndexMainProject,
    changeLang,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useMyContext = () => {
  const context: ContextType = useContext(Context);

  return context;
};

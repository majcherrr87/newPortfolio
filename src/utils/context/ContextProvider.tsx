import { ReactNode, createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';
import { Actions } from '../reducer/actions';

interface ContextType {
  mainColor: string;
  lang: string;
  indexMainProject: number;
  changeMainColor: (color: string) => void;
  changeLang: () => void;
  changeIndexMainProject: (index: number) => void;
}
interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextType>({
  mainColor: '',
  lang: '',
  indexMainProject: 0,
  changeMainColor: () => {},
  changeLang: () => {},
  changeIndexMainProject: () => {},
});

export function ContextProvider({ children }: ContextProviderProps) {
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
}

export const useMyContext = () => {
  const context: ContextType = useContext(Context);

  return context;
};
// https://www.youtube.com/watch?v=lSh9RyYcnPA&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=12

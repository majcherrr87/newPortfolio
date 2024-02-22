import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useMemo,
} from 'react';
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

export const Context = createContext<ContextType | null>(null);

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

  const value = useMemo(
    () => ({
      mainColor,
      lang,
      indexMainProject,
      changeMainColor,
      changeLang,
      changeIndexMainProject,
    }),
    [mainColor, lang, indexMainProject]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useMyContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMyContext must be used within a ContextProvider');
  }
  return context;
};

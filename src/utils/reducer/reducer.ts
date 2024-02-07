import { Actions, ActionTypes, InitialStateTypes } from './actions';

export const initialState: InitialStateTypes = {
  mainColor: '#01be96',
  lang: 'POL',
  indexMainProject: 0,
};
export function reducer(prevState = initialState, action: ActionTypes) {
  const { type, payload } = action;
  switch (type) {
    case Actions.CHANGE_MAIN_COLOR:
      return {
        ...prevState,
        mainColor: payload,
      };
    case Actions.CHANGE_LANG:
      return {
        ...prevState,
        lang: prevState.lang === 'POL' ? 'ENG' : 'POL',
      };
    case Actions.CHANGE_INDEX_MAIN_PROJECT:
      return {
        ...prevState,
        indexMainProject: payload,
      };
    default:
      throw new Error(`No case for type ${type} found in reducer`);
  }
}

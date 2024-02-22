import { Actions, ActionTypes, InitialStateTypes } from './actions';

export const initialState: InitialStateTypes = {
  mainColor: '#01be96',
  lang: 'POL',
  indexMainProject: 0,
};
export function reducer(
  prevState: InitialStateTypes,
  action: ActionTypes
): InitialStateTypes {
  switch (action.type) {
    case Actions.CHANGE_MAIN_COLOR:
      return {
        ...prevState,
        mainColor: action.payload,
      };
    case Actions.CHANGE_LANG:
      return {
        ...prevState,
        lang: prevState.lang === 'POL' ? 'ENG' : 'POL',
      };
    case Actions.CHANGE_INDEX_MAIN_PROJECT:
      return {
        ...prevState,
        indexMainProject: action.payload,
      };
    default:
      return prevState;
  }
}

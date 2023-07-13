import { Actions, ActionTypes, InitialStateTypes } from './actions';

export const initialState: InitialStateTypes = {
  mainColor: '#01be96',
  btnOption: false,
  hamburgerMenu: false,
};
export function reducer(prevState = initialState, action: ActionTypes) {
  switch (action.type) {
    case Actions.CHANGE_MAIN_COLOR:
      return {
        ...prevState,
        mainColor: action.payload,
      };
    case Actions.TOGGLE_COLOR_CHANGER:
      return { ...prevState, btnOption: !prevState.btnOption };
    case Actions.TOGGLE_HAMBURGER_MENU:
      return { ...prevState, hamburgerMenu: !prevState.hamburgerMenu };
    case Actions.ALL:
      return { ...prevState };
    default:
      return prevState;
  }
}

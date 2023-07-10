export enum Actions {
  CHANGE_MAIN_COLOR = 'changeMainColor',
  TOGGLE_COLOR_CHANGER = 'openColorChanger',
  TOGGLE_HAMBURGER_MENU = 'toggleHamburgerMenu',
}
export type InitialStateTypes = {
  mainColor: string;
  btnOption: boolean;
  hamburgerMenu: string;
};
export type ActionTypes = {
  type: Actions;
  payload: number | string;
};

export type ReducerDestructuringTypes = [InitialStateTypes, ActionTypes];

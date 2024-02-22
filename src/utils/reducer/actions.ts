export enum Actions {
  CHANGE_MAIN_COLOR = 'changeMainColor',
  CHANGE_LANG = 'changeLang',
  CHANGE_INDEX_MAIN_PROJECT = 'changeIndexMainProject',
}
export type InitialStateTypes = {
  mainColor: string;
  lang: string;
  indexMainProject: number;
};
export type ActionChangeLang = {
  type: Actions.CHANGE_LANG;
};
export type ActionChangeMainColor = {
  type: Actions.CHANGE_MAIN_COLOR;
  payload: string;
};
export type ActionChangeIndexMainProject = {
  type: Actions.CHANGE_INDEX_MAIN_PROJECT;
  payload: number;
};
export type ActionChangewitchPayload =
  | ActionChangeMainColor
  | ActionChangeIndexMainProject;

export type ActionTypes = ActionChangeLang | ActionChangewitchPayload;

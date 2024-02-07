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
export type ActionTypes = {
  type: Actions;
  payload?: number | string;
};

export type ReducerDestructuringTypes = [InitialStateTypes, ActionTypes];

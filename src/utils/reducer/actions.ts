export enum Actions {
  UPDATE_NAME = 'updateName',
  UPDATE_SURNAME = 'updateSurname',
  UPDATE_AGE = 'updateAge',
  RESET = 'reset',
}
export type InitialStateTypes = {
  name: string;
  surname: string;
  age: number;
};
export type ReducerDestructuringTypes = [InitialStateTypes, ActionTypes];

type UpdateState = {
  type: Actions;
  payload: number | string;
};
type ResetState = {
  type: Actions.RESET;
};

export type ActionTypes = UpdateState | ResetState;

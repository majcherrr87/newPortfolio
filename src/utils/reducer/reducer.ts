import { Actions, ActionTypes, InitialStateTypes } from './actions';

export const initialState: InitialStateTypes = {
  name: 'Adrian',
  surname: 'Majcher',
  age: 36,
};
export function reducer(prevState = initialState, action: ActionTypes) {
  switch (action.type) {
    case Actions.UPDATE_NAME:
      return { ...prevState, name: action.payload };
    case Actions.UPDATE_SURNAME:
      return { ...prevState, surname: action.payload };
    case Actions.UPDATE_AGE:
      return { ...prevState, age: action.payload };
    case Actions.RESET:
      return initialState;
    default:
      return prevState;
  }
}

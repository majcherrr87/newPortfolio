import { useReducer } from 'react';
import { initialState, reducer } from '../utils/reducer/reducer';
import { Actions, ReducerDestructuringTypes } from '../utils/reducer/actions';

const Test = () => {
  const [{ name, surname, age }, dispatch]: ReducerDestructuringTypes =
    useReducer(reducer, initialState);
  return (
    <>
      <div>
        Imie: {name}
        <button
          onClick={() => dispatch({ type: Actions.UPDATE_NAME, payload: 'Kot' })}
        >
          Zmień imie
        </button>
      </div>
      <div>
        Nazwisko: {surname}
        <button
          onClick={() =>
            dispatch({ type: Actions.UPDATE_SURNAME, payload: 'Lisa' })
          }
        >
          Zmień Nazwisko
        </button>
      </div>
      <div>
        Wiek: {age}
        <button
          onClick={() => dispatch({ type: Actions.UPDATE_AGE, payload: 1 })}
        >
          Zmień Wiek
        </button>
      </div>
      <div>
        Reset
        <button onClick={() => dispatch({ type: Actions.RESET })}>Reset</button>
      </div>
    </>
  );
};
export default Test;

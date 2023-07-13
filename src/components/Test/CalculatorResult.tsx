import { useSelector } from 'react-redux';
import { RootState } from './store/index';

const CalculatorResult = () => {
  const { first, second, result } = useSelector(
    (store: RootState) => store.calculator
  );
  return (
    <>
      <h1>{result}</h1>
      <p>
        current values {first} and {second}
      </p>
    </>
  );
};
export { CalculatorResult };

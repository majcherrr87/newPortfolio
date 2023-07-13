import { CalculatorForm } from '../../components/Test/CalculatorForm';
import { CalculatorButtons } from '../../components/Test/CalculatorButtons';
import { CalculatorHistory } from '../../components/Test/CalculatorHistory';
import { CalculatorResult } from '../../components/Test/CalculatorResult';
import { Provider } from 'react-redux';
import { store } from './store';
export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

const Calculator = () => {
  return (
    <Provider store={store}>
      <CalculatorForm />

      <CalculatorResult />

      <CalculatorButtons />

      <CalculatorHistory />
    </Provider>
  );
};
export default Calculator;

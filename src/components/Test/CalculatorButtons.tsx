import { RootState } from './store/index';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from './features/calculator/calculator-slice';
import { CalculatorArithmeticsButtons } from './CalculatorArithmeticsButtons';

const CalculatorButtons = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((store: RootState) => store.calculator);
  const handleClearHistory = () => {
    dispatch(clearHistory());
  };
  return (
    <>
      <CalculatorArithmeticsButtons />
      <button onClick={handleClearHistory}>
        ClearHistory ({history.length})
      </button>
    </>
  );
};
export { CalculatorButtons };

import { RootState } from './store/index';
import { useSelector } from 'react-redux';

const CalculatorHistory = () => {
  const { history } = useSelector((store: RootState) => store.calculator);
  return (
    <>
      <ul>
        {history.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </>
  );
};
export { CalculatorHistory };

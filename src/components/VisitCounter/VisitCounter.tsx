import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import CountUp from 'react-countup';
import EyeSvg from '../../assets/svg/EyeSvg';
import { useMyContext } from '../../utils/context/ContextProvider';

export function VisitCounter() {
  const [counter, setCounter] = useState('');
  const { mainColor, lang } = useMyContext();

  useEffect(() => {
    const ApiKey = import.meta.env.VITE_VISITE_COUNTER;

    const getCounter = () =>
      axios
        .request({
          method: 'GET',
          url: sessionStorage.getItem('counter')
            ? '/v1/counter?id=visit'
            : '/v1/counter?id=visit&hit=true',
          baseURL: 'https://api.api-ninjas.com',
          headers: {
            'X-Api-Key': ApiKey,
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setCounter(res.data.value.toString());
          sessionStorage.setItem('counter', 'true');
        })
        .catch((err) => {
          throw new Error('something went wrong', err);
        });
    getCounter();

    return () => {};
  }, []);

  return (
    <Container>
      <p>{lang === 'POL' ? 'Wyświetlenia' : 'Views'}</p>

      <Counter color={mainColor}>
        <EyeSvg />
        {counter.split('').map((num) => (
          <p key={nanoid()}>
            <CountUp start={0} end={Number(num)} duration={4} />
          </p>
        ))}
      </Counter>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: fit-content;
  margin-top: 1rem;
`;
const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  svg {
    fill: ${({ color }) => color};
  }
  p {
    border: 1px solid ${({ color }) => color};
    padding: 3px;
    border-radius: 5px;
  }
`;

import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Eye_svg from '../../assets/svg/eye_svg';
import { useMyContext } from '../../utils/context/ContextProvider';

export const VisitCounter = () => {
  const [counter, setCounter] = useState('');
  const { mainColor, lang } = useMyContext();

  useEffect(() => {
    const getCounter = () =>
      axios
        .request({
          method: 'GET',
          url: sessionStorage.getItem('counter')
            ? '/v1/counter?id=visit'
            : '/v1/counter?id=visit&hit=true',
          baseURL: 'https://api.api-ninjas.com',
          headers: { 'X-Api-Key': 'yXIxAV2O9sSIOvjTYZOeD9uoX5kesVXR88WVRcNb' },
          contentType: 'application/json',
        })
        .then((res) => {
          setCounter(res.data.value.toString());
          sessionStorage.setItem('counter', 'true');
        })
        .catch((err) => {
          console.log('something went wrong', err);
        });
    return () => getCounter();
  }, []);

  return (
    <Container>
      <p>Wyświetlenia </p>

      <Counter color={mainColor}>
        <Eye_svg />
        {counter.split('').map((num, index) => (
          <p key={index}>{Number(num)}</p>
        ))}
      </Counter>
    </Container>
  );
};
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
  svg {
    fill: ${({ color }) => color};
  }
  p {
    border: 1px solid ${({ color }) => color};
    padding: 3px;
    border-radius: 5px;
  }
`;

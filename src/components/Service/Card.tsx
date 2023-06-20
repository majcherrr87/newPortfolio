import { ReactPropTypes } from 'react';
import styled from 'styled-components';

type propsType = {
  Icon: ReactPropTypes;
  title: string;
  disc: string;
};

const Card = ({ Icon, title, disc }: propsType) => {
  return (
    <Container>
      <span>
        <Icon />
      </span>
      <h1>{title}</h1>
      <p>{disc}</p>
    </Container>
  );
};
export default Card;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.main};
  }
  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

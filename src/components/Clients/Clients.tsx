import styled from 'styled-components';
import { H1Title, Span } from '../../assets/smallComponent';

const Clients = () => {
  return (
    <Container>
      <Span>testimonials</Span>
      <H1Title>what client say</H1Title>
    </Container>
  );
};
export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 4rem 0;
`;

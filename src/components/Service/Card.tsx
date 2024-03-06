import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { CardType } from './service-data';

function Card({ link, img, title, disc, skills }: CardType) {
  return (
    <Container>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="" />
      </a>
      <h1>{title}</h1>
      <p>{disc}</p>
      <ul>
        {skills.map((skill) => (
          <li key={nanoid()}>{skill}</li>
        ))}
      </ul>
    </Container>
  );
}
export default Card;

const Container = styled.article`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  p {
    font-size: 0.8rem;
  }
  ul {
    padding: 1rem;
  }
`;

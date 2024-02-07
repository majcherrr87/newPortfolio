import styled from 'styled-components';

type propsType = {
  color: string;

  title: string;
  disc: string;
};

const Card = ({ link, img, title, disc, skills }: propsType) => {
  return (
    <Container>
      <a href={link} target="_blank">
        <img src={img} alt="" />
      </a>
      <h1>{title}</h1>
      <p>{disc}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </Container>
  );
};
export default Card;

const Container = styled.div`
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

import styled from 'styled-components';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export function SocialSection() {
  return (
    <Container>
      <h2 className="section-title">SOCIAL</h2>
      <Social>
        <Link to="https://github.com/majcherrr87" target="_blank">
          {BsGithub({ title: 'Check me out on GitHub.' })} majcherrr87
        </Link>
        <Link
          to="https://www.linkedin.com/in/adrian-majcher-46a529163/"
          target="_blank"
        >
          {BsLinkedin({ title: 'Check me out on Linkedin.' })}
          adrian-majcher
        </Link>
      </Social>
    </Container>
  );
}
const Container = styled.section`
  display: grid;
  padding: 1.5rem;
  grid-template-columns: max-content;
  gap: 1rem;
`;
const Social = styled.div`
  display: grid;
  gap: 1.5rem;
  a {
    display: inline-flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.small_font_size};
    color: ${({ theme }) => theme.colors.text_color};
    :hover {
      color: ${({ theme }) => theme.colors.title_color};
    }
    svg {
      font-size: 1.2rem;
      margin-right: 0.25rem;
    }
  }
`;

import styled from 'styled-components';

export function ProfileSection() {
  return (
    <Container id="profile">
      <h2 className="section-title">Profil</h2>
      <p>
        I am a junior JavaScript developer passionate about crafting
        aesthetically pleasing and functional web applications. I have
        experience working with frontend tools such as React, TypeScript, SASS,
        and Styled Components. I am currently learning Angular. In my spare
        time, I am dedicated to expanding my skill set by learning new
        technologies.
      </p>
    </Container>
  );
}
const Container = styled.section`
  padding: 1.5rem;
  p {
    text-align: center;
    @media screen and (min-width: 968px) {
      text-align: initial;
    }
  }
`;

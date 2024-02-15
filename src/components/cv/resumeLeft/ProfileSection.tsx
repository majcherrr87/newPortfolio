import styled from 'styled-components';

export function ProfileSection() {
  return (
    <Container id="profile">
      <h2 className="section-title">Profil</h2>
      <p>
        Jestem początkującym programistą języka Javascript, specjalizującym się
        w backendzie. Jestem gotowy do podjęcia nowych wyzwań.
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

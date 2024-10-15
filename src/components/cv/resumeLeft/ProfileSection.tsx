import styled from 'styled-components';

export function ProfileSection() {
  return (
    <Container id="profile">
      <h2 className="section-title">Profil</h2>
      <p>
        Jestem początkującym programistą JavaScript z pasją do tworzenia
        estetycznych i funkcjonalnych stron internetowych. Mam doświadczenie w
        pracy z narzędziami frontendowymi, takimi jak React, TypeScript, SASS i
        Styled Components. Obecnie uczę się Angulara. W wolnym czasie rozwijam
        swoje umiejętności, ucząc się nowych technologii
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

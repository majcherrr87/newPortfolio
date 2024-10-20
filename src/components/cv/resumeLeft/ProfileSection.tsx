import { useContext } from 'react';
import styled from 'styled-components';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';

export function ProfileSection() {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }

  const { language } = context;
  const dataTxt = [
    {
      id: 1,
      lang: 'english',
      text: `I am a junior JavaScript developer passionate about crafting
        aesthetically pleasing and functional web applications. I have
        experience working with frontend tools such as React, TypeScript, SASS,
        and Styled Components. I am currently learning Angular. In my spare
        time, I am dedicated to expanding my skill set by learning new
        technologies.`,
    },
    {
      id: 2,
      lang: 'polish',
      text: `Jestem początkującym programistą JavaScript z pasją do tworzenia estetycznych i funkcjonalnych stron internetowych. Mam doświadczenie w pracy z narzędziami frontendowymi, takimi jak React, TypeScript, SASS i Styled Components. Obecnie uczę się Angulara. W wolnym czasie rozwijam swoje umiejętności, ucząc się nowych technologii`,
    },
  ];
  const data = selectLang(dataTxt, language);

  return (
    <Container id="profile">
      <h2 className="section-title">Profil</h2>
      <p>{data?.text}</p>
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

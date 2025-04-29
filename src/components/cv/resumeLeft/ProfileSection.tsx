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
      text: `Front-end developer specializing in JavaScript and TypeScript, with expertise in React and Next.js frameworks. Proficient in using Styled Components and the SASS preprocessor. Additionally, I possess practical experience in developing back-end solutions.`,
    },
    {
      id: 2,
      lang: 'polish',
      text: `Programista specjalizujący się w technologiach front-endowych, w szczególności w językach JavaScript i TypeScript oraz frameworkach React i Next.js. Sprawnie posługuję się bibliotekami Styled Components i preprocesorem SASS. Dodatkowo posiadam praktyczne doświadczenie w tworzeniu rozwiązań backendowych.`,
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

import { useContext } from 'react';
import styled from 'styled-components';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';

type DataTxt = {
  id: number;
  lang: string;
  languages: string[];
};

export function LanguagesSection() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }
  const { language } = context;

  const dataTxt: DataTxt[] = [
    {
      id: 1,
      lang: 'english',
      languages: ['Polish (Native)', 'English (B2)'],
    },
    {
      id: 2,
      lang: 'polish',
      languages: ['Polski (ojczysty)', 'Angielski (B2)'],
    },
  ];

  const data = selectLang(dataTxt, language);
  return (
    <ContainerSection id="languages">
      <h2 className="section-title">Languages</h2>

      <Container>
        <ul>
          {data?.languages.map((item) => (
            <li key={item}>
              <span /> {item}
            </li>
          ))}
        </ul>
      </Container>
    </ContainerSection>
  );
}
const ContainerSection = styled.div`
  padding: 1.5rem;
`;
const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 968px) {
      grid-template-columns: repeat(3, max-content);
      gap: 3.5rem;
    }
    li {
      display: flex;
      align-items: center;
      margin-bottom: ${({ theme }) => theme.margins.mb_3};
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.text_color};
        border-radius: 50%;
        margin-right: 0.75rem;
      }
    }
  }
`;

import { useContext } from 'react';
import styled from 'styled-components';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';
import { intrestData } from './interestsData';

export function InterestsSection() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }
  const { language } = context;

  const data = selectLang(intrestData, language);
  return (
    <ContainerSection id="interests">
      <h2 className="section-title">{data?.title}</h2>

      <Container>
        {data?.intrest.map(({ id, title, subTitle, icon }) => (
          <Content key={id}>
            {icon({ title: subTitle })}
            <span>{title}</span>
          </Content>
        ))}
      </Container>
    </ContainerSection>
  );
}
const ContainerSection = styled.div`
  padding: 1.5rem;
`;
const Container = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: ${({ theme }) => theme.margins.mb_2};
  @media screen and (min-width: 968px) {
    grid-template-columns: repeat(5, max-content);
    gap: 3.5rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text_color_light};
    margin-bottom: 0.25rem;
  }
`;

import styled from 'styled-components';

import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { H1Title, Span } from '../../assets/smallComponent';
import wszia from '../../assets/img/courses/wsiza.webp';
import { dataEducation, EducationDataType } from './edukation-data';

export function Education() {
  const { mainColor, lang } = useMyContext();
  const { sectionTitle, name, description, data }: EducationDataType =
    selectLang(dataEducation, lang);
  return (
    <Container>
      <h4>
        Edu<Span color={mainColor}>{sectionTitle}</Span>
      </h4>
      <Content>
        <img src={wszia} alt={name} />
        <div>
          <H1Title>{name}</H1Title>
          <p>{description}</p>
          <p>{data}</p>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
`;
const Content = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;

  img {
    height: 100%;
    padding-top: 0.5rem;
  }
  h1 {
    padding: 0;
  }
  p {
    margin-top: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    h1 {
      font-size: 1rem;
    }
  }
`;

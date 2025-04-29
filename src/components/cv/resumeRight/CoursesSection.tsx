import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCheck } from 'react-icons/bi';
import { Content, Data } from '../resumeLeft/EduSection';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';
import { CoursesData } from './CoursesData';

export function CoursesSection() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }
  const { language } = context;

  const data = selectLang(CoursesData, language);

  return (
    <ContainerSection id="experience">
      <h2 className="section-title">{data?.title}</h2>
      <Container>
        {data?.courses.map(({ id, name, description, details, url }) => (
          <Content key={id}>
            <Data>
              <Link to={url} target="_blank">
                <h3>{name}</h3>
              </Link>
              <p>{description}</p>
              <ul>
                {details.map((item) => (
                  <li key={item}>
                    <div>
                      <BiCheck /> {item}
                    </div>
                  </li>
                ))}
              </ul>
            </Data>
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
`;

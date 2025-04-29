import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCheck } from 'react-icons/bi';
import { Content, Data, Time } from '../resumeLeft/EduSection';
import { experienseData } from './CoursesData';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';

export function CoursesSection() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }
  const { language } = context;

  const data = selectLang(experienseData, language);

  return (
    <ContainerSection id="courses">
      <h2 className="section-title">{data?.title}</h2>
      <Container>
        {data?.courses.map(
          ({ id, name, description, details, url }, index, tab) => (
            <Content key={id}>
              <Time>
                <span className="rounder" />
                {index < tab.length - 1 ? <span className="line" /> : null}
              </Time>
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
          )
        )}
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

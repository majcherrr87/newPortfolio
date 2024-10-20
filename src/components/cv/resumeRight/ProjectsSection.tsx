import { useContext } from 'react';
import styled from 'styled-components';
import { projectsData } from './projectsData';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';

export function ProjectsSection() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }
  const { language } = context;

  const data = selectLang(projectsData, language);
  return (
    <ContainerSection id="projects">
      <h2 className="section-title">{data?.title}</h2>
      <Container>
        {data?.project.map(({ name, description, link }) => (
          <Content key={name}>
            <h3>{name}</h3>
            <ul>
              {link.map((el) => (
                <li key={el}>
                  <a href={el} target="_blank" rel="noopener noreferrer">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
            <p>{description}</p>
          </Content>
        ))}
      </Container>
    </ContainerSection>
  );
}
export const ContainerSection = styled.div`
  padding: 1.5rem;
`;
export const Container = styled.div`
  display: grid;
  gap: 1.5rem;
`;
export const Content = styled.div`
  display: grid;
  gap: 0.5rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      font-size: 1.5rem;
    }
  }

  ul li a {
    word-break: break-all;
    color: #00a29c;
    margin-left: 0.5rem;
  }
  p a {
    word-break: break-all;
    color: #00a29c;
    margin-left: 0.5rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.h3_font_size};
    // margin-bottom: ${({ theme }) => theme.margins.mb_1};
    svg {
      font-size: ${({ theme }) => theme.font.h2_font_size};
    }
    a {
      color: #00a29c;
    }
  }
`;

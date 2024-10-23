import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { Span, Title } from '../../assets/smallComponent';
import { mainProjectData, DataType } from './mainProject-data';
import { ProjectData, ProjectDataType } from '../Projects/project-data';
import FeaturedProject from './FeaturedProject';

export function MainProject() {
  const { mainColor, lang, indexMainProject } = useMyContext();
  const {
    txtTitleFirst,
    txtTitleSecond,
    txtButtonGithub,
    txtButtonLiveDemo,
  }: DataType = selectLang(mainProjectData, lang) ?? mainProjectData[0];
  const { projects }: ProjectDataType =
    selectLang(ProjectData, lang) ?? ProjectData[0];

  const { ref: MainProjectRef, inView } = useInView();
  const [view, setView] = useState('');
  useEffect(() => {
    if (inView) setView('visible');
  }, [inView]);

  return (
    <Container id="Project">
      <Title ref={MainProjectRef} className={view}>
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </Title>

      <FeaturedProject
        projects={projects}
        project={0}
        txtButtonLiveDemo={txtButtonLiveDemo}
        txtButtonGithub={txtButtonGithub}
        isReversed={false}
      />
      <div id="MainProject">
        <FeaturedProject
          projects={projects}
          project={indexMainProject}
          txtButtonLiveDemo={txtButtonLiveDemo}
          txtButtonGithub={txtButtonGithub}
          isReversed
        />
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 2rem 0;
  h1 {
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  #MainProject {
    padding-top: 1rem;
  }

  h1.visible {
    animation: animateTitle 1s forwards;
  }

  @keyframes animateTitle {
    to {
      scale: 1;
      opacity: 1;
    }
  }
  article.visible {
    animation: animateMainProjectLeft 1s forwards;
  }

  @keyframes animateMainProjectLeft {
    from {
      transform: translateX(100%);
    }
  }
  article.visible:nth-last-child(1) {
    animation: animateMainProjectRight 1s forwards;
  }

  @keyframes animateMainProjectRight {
    from {
      transform: translateX(-100%);
    }
  }
`;

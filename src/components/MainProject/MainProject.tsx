import { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
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
    txtShowMore,
    txtShowLess,
  }: DataType = selectLang(mainProjectData, lang) ?? mainProjectData[0];
  const { projects }: ProjectDataType =
    selectLang(ProjectData, lang) ?? ProjectData[0];

  const { ref: MainProjectRef, inView } = useInView();
  const [view, setView] = useState('');
  const [showAll, setShowAll] = useState(false);

  const restOfProjects = projects.filter((restProjest) => {
    return restProjest.index !== 0 && restProjest.index !== indexMainProject;
  });

  useEffect(() => {
    if (inView) setView('visible');
  }, [inView]);

  return (
    <Container id="Project" color={mainColor}>
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
      <FeaturedProject
        projects={projects}
        project={indexMainProject}
        txtButtonLiveDemo={txtButtonLiveDemo}
        txtButtonGithub={txtButtonGithub}
        isReversed
      />
      <AnimateHeight duration={1500} height={showAll ? 'auto' : 0}>
        {showAll &&
          restOfProjects.map((project, index) => (
            <FeaturedProject
              key={project.index}
              projects={projects}
              project={project.index}
              txtButtonLiveDemo={txtButtonLiveDemo}
              txtButtonGithub={txtButtonGithub}
              isReversed={index % 2 === 1}
            />
          ))}
      </AnimateHeight>

      <div className="showAll">
        <button type="button" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? txtShowLess : txtShowMore}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.section<{ color: string }>`
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
  .showAll {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    button {
      padding: 0.7rem 1.5rem;
      margin-top: 3rem;
      cursor: pointer;
      background-color: ${({ color }) => color};
      border: none;
      color: #fff;
      font-weight: 500;
      filter: drop-shadow(0px 10px 10px ${({ color }) => color + 51});

      :hover {
        filter: drop-shadow(0px 10px 10px ${({ color }) => color + 70});
      }
    }
  }
`;

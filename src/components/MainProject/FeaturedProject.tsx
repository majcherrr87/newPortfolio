import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { ViewDemo } from '../../assets/svg/ViewDemo';
import IconMarkGithub16 from '../../assets/svg/github';
import { MainProjectTypes } from './MainProjectTypes';

export default function FeaturedProject({
  projects,
  txtButtonLiveDemo,
  txtButtonGithub,
  isReversed,
  project,
}: MainProjectTypes) {
  const { ref: fraturedProjectRef, inView } = useInView();
  const [view, setView] = useState(false);
  useEffect(() => {
    if (inView) setView(true);
  }, [inView]);

  return (
    <Container
      isReversed={isReversed}
      id="FeaturedProject"
      ref={fraturedProjectRef}
      className={view ? 'visible' : ''}
    >
      <ProjectMediaSection>
        {projects[project].srcVideo === '' ? (
          <img src={projects[project].srcImg} key={project} alt="" />
        ) : (
          <video key={project} autoPlay loop muted>
            <source src={projects[project].srcVideo} type="video/mp4" />
            <track kind="captions" />
            <p>`Sorry, Your Browser Doesn`t Support Embedded Videos.</p>
          </video>
        )}
      </ProjectMediaSection>
      <ProjectDetails isReversed={isReversed}>
        <div>
          <h1>{projects[project].title}</h1>
          <span>{projects[project].disc}</span>
          <TechStack isReversed={isReversed}>
            <span>Tech:</span>
            {projects[project].technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </TechStack>
        </div>
        <ShowProject>
          <Link
            to={projects[project].linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" disabled={!projects[project].linkGitHub}>
              {txtButtonGithub} <IconMarkGithub16 />
            </button>
          </Link>
          <Link
            to={projects[project].linkDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" disabled={!projects[project].linkDemo}>
              {txtButtonLiveDemo} <ViewDemo />
            </button>
          </Link>
        </ShowProject>
      </ProjectDetails>
    </Container>
  );
}
const Container = styled.article<{ isReversed: boolean }>`
  display: flex;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 2rem;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 1rem;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    padding: 1rem;
  }
`;

const ProjectMediaSection = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100%;
  }
  img,
  video {
    max-height: 350px;
    object-fit: cover;
    border: 1px solid #000;
    border-radius: 2rem;
  }
`;
const ProjectDetails = styled.div<{ isReversed: boolean }>`
  width: 50%;
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
  cursor: default;
  div > h1,
  p {
    text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
    margin-bottom: 1rem;
  }

  @media (max-width: calc(${({ theme }) => theme.size.md} + 150px)) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100%;
    & {
      align-items: center;
      div > h1 {
        text-align: center;
      }
    }
  }
`;
const ShowProject = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 3rem;

  button {
    font-weight: bold;
    padding: 0.3rem;
    cursor: pointer;
    border-radius: 10px;
    align-content: center;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    svg {
      font-size: 1.7rem;
    }
  }
`;
const TechStack = styled.div<{ isReversed: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ isReversed }) =>
    isReversed ? 'flex-end' : 'flex-start'};
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 1rem;

  span:not(:first-child) {
    color: black;
    font-size: 0.8rem;
    background: #505062;
    border-radius: 8px;
    padding: 5px;

    &:hover {
      color: #9999c2;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    justify-content: left;
  }
`;

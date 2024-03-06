import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import IconMarkGithub16 from '../../assets/svg/github';
import { MainProjectTypes } from './MainProjectTypes';

export default function FeaturedProject({
  projects,
  txtButton,
  isReversed,
  project,
}: MainProjectTypes) {
  const { ref: fratureProjectRef, inView } = useInView();
  const [view, setView] = useState(false);
  useEffect(() => {
    if (inView) setView(true);
  }, [inView]);

  return (
    <Container
      isReversed={isReversed}
      id="FeaturedProject"
      ref={fratureProjectRef}
      className={`${view && 'visible'}`}
    >
      <LeftSiteProject>
        {projects[project].srcVideo === '' ? (
          <img src={projects[project].srcImg} key={project} alt="" />
        ) : (
          <video key={project} autoPlay loop muted>
            <source src={projects[project].srcVideo} type="video/mp4" />
            <track kind="captions" />
            <p>`Sorry, Your Browser Doesn`t Support Embedded Videos.</p>
          </video>
        )}
      </LeftSiteProject>
      <RightSiteProject isReversed={isReversed}>
        <div>
          <h1>{projects[project].title}</h1>
          <p>{projects[project].disc}</p>
        </div>
        <ShowProject>
          <a href={projects[project].linkGitHub}>
            <IconMarkGithub16 />
          </a>
          <a href={projects[project].linkDemo}>
            <button type="button">{txtButton}</button>
          </a>
        </ShowProject>
      </RightSiteProject>
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

const LeftSiteProject = styled.div`
  width: 50%;
  display: flex;
  flex: 1;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100%;
  }
  img,
  video {
    width: 100%;
    object-fit: cover;
    border: 1px solid #000;
    border-radius: 2rem;
  }
`;
const RightSiteProject = styled.div<{ isReversed: boolean }>`
  width: 50%;
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
  div > h1 {
    text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
    margin-bottom: 1rem;
  }
  div > p {
    text-align: justify;
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
    padding: 1rem;
  }
  a:first-of-type {
    margin-top: 1rem;
    color: white;
  }
`;

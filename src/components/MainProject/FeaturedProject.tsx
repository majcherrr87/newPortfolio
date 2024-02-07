import React from 'react';
import styled from 'styled-components';
import IconMarkGithub16 from '../../assets/svg/github';

export default function FeaturedProject({
  projects,
  txtButton,
  isReversed,
  project,
}) {
  return (
    <Container isReversed={isReversed}>
      <LeftSiteProject>
        <video src={projects[project].src} autoPlay loop />
      </LeftSiteProject>
      <RightSiteProject isReversed={isReversed}>
        <h1>{projects[project].title}</h1>
        <p>{projects[project].disc}</p>
        <ShowProject>
          <a href={projects[project].linkGitHub}>
            <IconMarkGithub16 />
          </a>
          <a href={projects[project].linkDemo}>
            <button>{txtButton}</button>
          </a>
        </ShowProject>
      </RightSiteProject>
    </Container>
  );
}
const Container = styled.div`
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
  flex: 1;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100%;
  }
  img,
  video {
    width: 100%;
    border: 1px solid #000;
    border-radius: 2rem;
  }
`;
const RightSiteProject = styled.div`
  width: 50%;
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
  p {
    text-align: justify;
  }
  @media (max-width: calc(${({ theme }) => theme.size.md} + 150px)) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100%;
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

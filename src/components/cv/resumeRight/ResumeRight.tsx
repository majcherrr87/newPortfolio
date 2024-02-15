import styled from 'styled-components';
import { ExperienceSection } from './ExperienceSection';
import { CertificateSection } from './CertificateSection';
import { ProjectsSection } from './ProjectsSection';
import { InterestsSection } from './InterestsSection';

export function ResumeRight() {
  return (
    <Container>
      <ExperienceSection />
      <ProjectsSection />
      <CertificateSection />
      <InterestsSection />
    </Container>
  );
}

const Container = styled.div`
  @media screen and (min-width: 968px) {
    //padding: 0 1.5rem;
  }
`;

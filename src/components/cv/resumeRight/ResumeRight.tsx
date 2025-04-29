import styled from 'styled-components';
import { CertificateSection } from './CertificateSection';
import { ProjectsSection } from './ProjectsSection';
import { InterestsSection } from './InterestsSection';
import { CoursesSection } from './CoursesSection';
import { ExperienceSection } from './ExperienceSection';

export function ResumeRight() {
  return (
    <Container>
      <ExperienceSection />
      <ProjectsSection />
      <CoursesSection />
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

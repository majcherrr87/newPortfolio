import styled from 'styled-components';
import { ExperienceSection } from './ExperienceSection';
import { CertificateSection } from './CertificateSection';
import { ProjectsSection } from './ProjectsSection';

export const ResumeRight = () => {
  return (
    <Container>
      <ExperienceSection />
      <ProjectsSection />
      <CertificateSection />
    </Container>
  );
};

const Container = styled.div`
  @media screen and (min-width: 968px) {
    //padding: 0 1.5rem;
  }
`;

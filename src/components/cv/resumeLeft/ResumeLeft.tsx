import styled from 'styled-components';
import { HomeSection } from '../resumeLeft/HomeSection';
import { SocialSection } from '../resumeLeft/SocialSection';
import { ProfileSection } from '../resumeLeft/ProfileSection';
import { EduSection } from '../resumeLeft/EduSection';
import { SkillsSection } from '../resumeLeft/SkillsSection';
import { LanguagesSection } from './LanguagesSection';

export const ResumeLeft = ({ switchTheme }) => {
  return (
    <Container>
      <HomeSection switchTheme={switchTheme} />
      <SocialSection />
      <ProfileSection />
      <EduSection />
      <SkillsSection />
      <LanguagesSection />
    </Container>
  );
};

const Container = styled.div`
  @media screen and (min-width: 968px) {
    background-color: ${({ theme }) => theme.colors.container_color_alt};
    //padding: 0 1.5rem;
    transition: all 0.5s ease;
  }
`;

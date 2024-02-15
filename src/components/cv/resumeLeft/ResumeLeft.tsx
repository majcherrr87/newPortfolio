import styled from 'styled-components';
import { HomeSection } from './HomeSection';
import { SocialSection } from './SocialSection';
import { ProfileSection } from './ProfileSection';
import { EduSection } from './EduSection';
import { SkillsSection } from './SkillsSection';
import { LanguagesSection } from './LanguagesSection';
import { CvSwitchThemeType } from '../CvTypes';

export function ResumeLeft({ switchTheme }: CvSwitchThemeType) {
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
}

const Container = styled.div`
  @media screen and (min-width: 968px) {
    background-color: ${({ theme }) => theme.colors.container_color_alt};
    //padding: 0 1.5rem;
    transition: all 0.5s ease;
  }
`;

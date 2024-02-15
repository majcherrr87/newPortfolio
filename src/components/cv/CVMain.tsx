import styled from 'styled-components';
import { ResumeLeft } from './resumeLeft/ResumeLeft';
import { ResumeRight } from './resumeRight/ResumeRight';
import { CvSwitchThemeType } from './CvTypes';

export function CVMain({ switchTheme }: CvSwitchThemeType) {
  return (
    <MainContainer>
      <Resume>
        <ResumeLeft switchTheme={switchTheme} />
        <ResumeRight />
      </Resume>
    </MainContainer>
  );
}
const MainContainer = styled.main`
  width: 100%;
  @media screen and (min-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const Resume = styled.div`
  @media screen and (min-width: 968px) {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    background-color: ${({ theme }) => theme.colors.container_color};
    box-shadow: 0 0 8px rgba(13, 12, 12, 0.15);
    transition: all 0.5s ease;
  }
`;

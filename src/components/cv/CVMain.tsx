import styled from 'styled-components';
import { ResumeLeft } from './resumeLeft/ResumeLeft';
import { ResumeRight } from './resumeRight/ResumeRight';
import { CvClause } from './CvClause/CvClause';

export function CVMain() {
  return (
    <MainContainer>
      <Resume>
        <ResumeLeft />
        <ResumeRight />
        <CvClause />
      </Resume>
    </MainContainer>
  );
}
const MainContainer = styled.main`
  /* max-width: 1200px; */
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

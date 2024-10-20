import styled from 'styled-components';
import { ResumeLeft } from './resumeLeft/ResumeLeft';
import { ResumeRight } from './resumeRight/ResumeRight';

export function CVMain() {
  return (
    <MainContainer>
      <Resume>
        <ResumeLeft />
        <ResumeRight />
        <CVClause>
          I hereby give my consent for the processing of my personal data for
          the purposes necessary to carry out the recruitment process (in
          accordance with the Act of May 10, 2018, on the protection of personal
          data (Journal of Laws of 2018, item 1000) and in accordance with
          Regulation (EU) 2016/679 of the European Parliament and of the Council
          of April 27, 2016, on the protection of natural persons with regard to
          the processing of personal data and on the free movement of such data,
          and repealing Directive 95/46/EC (GDPR))
        </CVClause>
      </Resume>
    </MainContainer>
  );
}
const MainContainer = styled.main`
  max-width: 1200px;
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

const CVClause = styled.p`
  grid-column: 1 / span 2;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.font.smaller_font_size};
`;

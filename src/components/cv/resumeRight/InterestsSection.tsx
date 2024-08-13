import styled from 'styled-components';
import { FaHeadphonesAlt, FaHiking } from 'react-icons/fa';
import { BiSolidPlaneAlt, BiBook, BiDumbbell, BiRun } from 'react-icons/bi';

export function InterestsSection() {
  return (
    <ContainerSection id="interests">
      <h2 className="section-title">Interests</h2>

      <Container>
        <Content>
          {BiRun({ title: 'Cross-country running' })}
          <span>Run</span>
        </Content>

        <Content>
          {FaHiking({ title: 'Hiking trips' })}
          <span>Hiking trips</span>
        </Content>

        <Content>
          {BiDumbbell({ title: 'Spending time at the gym' })}
          <span>Fitness</span>
        </Content>

        <Content>
          {FaHeadphonesAlt({ title: '"Listen to rock music"' })}
          <span>Music</span>
        </Content>

        <Content>
          {BiBook({ title: 'Reading about healthy lifestyle' })}
          <span>Read</span>
        </Content>
      </Container>
    </ContainerSection>
  );
}
const ContainerSection = styled.div`
  padding: 1.5rem;
`;
const Container = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: ${({ theme }) => theme.margins.mb_2};
  @media screen and (min-width: 968px) {
    grid-template-columns: repeat(5, max-content);
    gap: 3.5rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text_color_light};
    margin-bottom: 0.25rem;
  }
`;

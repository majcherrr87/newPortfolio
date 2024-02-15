import styled from 'styled-components';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { BiSolidPlaneAlt, BiBook, BiDumbbell } from 'react-icons/bi';

export function InterestsSection() {
  return (
    <ContainerSection id="interests">
      <h2 className="section-title">Interests</h2>

      <Container>
        <Content>
          {FaHeadphonesAlt()}
          <span>Music</span>
        </Content>

        <Content>
          {BiSolidPlaneAlt()}
          <span>Travel</span>
        </Content>

        <Content>
          {BiBook()}
          <span>Read</span>
        </Content>

        <Content>
          {BiDumbbell()}
          <span>Fitness</span>
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
    grid-template-columns: repeat(4, max-content);
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

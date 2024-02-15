import styled from 'styled-components';

export function LanguagesSection() {
  const data = ['Polski (ojczysty)', 'Angielski (B2)'];
  return (
    <ContainerSection id="languages">
      <h2 className="section-title">Języki</h2>

      <Container>
        <ul>
          {data.map((item) => (
            <li key={item}>
              <span /> {item}
            </li>
          ))}
        </ul>
      </Container>
    </ContainerSection>
  );
}
const ContainerSection = styled.div`
  padding: 1.5rem;
`;
const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 968px) {
      grid-template-columns: repeat(3, max-content);
      gap: 3.5rem;
    }
    li {
      display: flex;
      align-items: center;
      margin-bottom: ${({ theme }) => theme.margins.mb_3};
      span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.text_color};
        border-radius: 50%;
        margin-right: 0.75rem;
      }
    }
  }
`;

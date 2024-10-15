import styled from 'styled-components';

type DataType = [string[], string[]];

export function SkillsSection() {
  const data: DataType = [
    ['JavaScript', 'TypeScript', 'React', 'Angular', 'StyledComponent'],
    ['Node', 'Express', 'SQL', 'ReactNative'],
  ];
  return (
    <Container id="skills">
      <h2 className="section-title">Skills</h2>

      <Content>
        {data.map((tab) => (
          <ul key={tab[0]}>
            {tab.map((item) => (
              <li key={item}>
                <span />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </Content>
    </Container>
  );
}
const Container = styled.section`
  padding: 1.5rem;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  ul {
    display: grid;
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

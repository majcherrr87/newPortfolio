import styled from 'styled-components';

type dataType = [[string], [string]];

export const SkillsSection = () => {
  const data: dataType = [
    ['JavaScript', 'TypeScript', 'StyledComponent', 'React'],
    ['Node', 'Express', 'SQL'],
  ];
  return (
    <Container id="skills">
      <h2 className="section-title">Skills</h2>

      <Content>
        {data.map((tab, index) => (
          <ul key={index}>
            {tab.map((item, i) => (
              <li key={i}>
                <span></span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </Content>
    </Container>
  );
};
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

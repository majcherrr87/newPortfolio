import styled from 'styled-components';

export type DataType = {
  id: string;
  name: string;
  direction: string;
  city: string;
  years: string;
};

export function EduSection() {
  const data: DataType[] = [
    {
      id: '1',
      name: 'WYŻSZA SZKOŁA ZARZĄDZANIA I\u00A0ADMINISTRACJI',
      direction: 'Software Engineer',
      city: 'Zamość',
      years: '2013 - 2017',
    },
    {
      id: '2',
      name: 'Profiled high school',
      direction: 'Information Management profile',
      city: 'Hrubieszów',
      years: ' 2003 - 2006',
    },
  ];

  return (
    <Container id="education">
      <h2 className="section-title">Education</h2>

      <Education>
        {data.map(({ id, name, direction, years, city }, index, tab) => (
          <Content key={id}>
            <Time>
              <span className="rounder" />
              {index < tab.length - 1 ? <span className="line" /> : null}
            </Time>
            <Data>
              <h3>{name}</h3>
              <span className="studies">{direction}</span>
              <span className="year">
                {city} {years}
              </span>
            </Data>
          </Content>
        ))}
      </Education>
    </Container>
  );
}
const Container = styled.section`
  padding: 1.5rem;
`;
const Education = styled.div`
  display: grid;
  gap: 1.5rem;
`;
export const Content = styled.div`
  display: flex;
`;
export const Time = styled.div`
  padding-right: 1rem;
  span.rounder {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.text_color_light};
    border-radius: 50%;
    margin-top: 0.25rem;
  }
  span.line {
    display: block;
    width: 2px;
    height: 110%;
    background-color: ${({ theme }) => theme.colors.text_color_light};
    transform: translate(7px, 0);
  }
`;
export const Data = styled.div`
  display: grid;
  gap: 0.5rem;
  h3 {
    font-size: ${({ theme }) => theme.font.h3_font_size};
  }
  span.studies,
  span.company {
    font-size: ${({ theme }) => theme.font.small_font_size};
    color: ${({ theme }) => theme.colors.title_color};
  }
  span.year {
    font-size: ${({ theme }) => theme.font.smaller_font_size};
  }
  ul li {
    margin-bottom: 0.25rem;
    div {
      display: flex;
      gap: 0.5rem;
      svg {
        color: green;
      }
    }
  }
`;

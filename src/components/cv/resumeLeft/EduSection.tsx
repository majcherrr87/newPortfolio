import styled from 'styled-components';
export type dataType = {
  name: string;
  direction: string;
  city: string;
  years: string;
};

export const EduSection = () => {
  const data: dataType[] = [
    {
      name: 'WYŻSZA SZKOŁA ZARZĄDZANIA I ADMINISTRACJI',
      direction: 'Inżynier Oprogramowania',
      city: 'Zamość',
      years: '2013 - 2017',
    },
    {
      name: 'LICEUM PROFILOWANE',
      direction: 'o profilu Zarządzanie informacją',
      city: 'Hrubieszów',
      years: ' 2003 - 2006',
    },
  ];

  return (
    <Container id="education">
      <h2 className="section-title">Edukacja</h2>

      <Education>
        {data.map(({ name, direction, years, city }, index, tab) => (
          <Content key={index}>
            <Time>
              <span className="rounder"></span>
              {index < tab.length - 1 ? <span className="line"></span> : null}
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
};
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

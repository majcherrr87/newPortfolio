import styled from 'styled-components';
import { BiCheck } from 'react-icons/bi';
import { Content, Data, Time } from '../resumeLeft/EduSection';

type DataType = {
  id: string;
  name: string;
  description?: string;
  details: string[];
};

export function ExperienceSection() {
  const data: DataType[] = [
    {
      id: '1',
      name: 'MEGA KURS',
      description:
        '14-miesięczny kurs on-line. Przygotowujący uczestników do pracy jako junior JavaScript Developer, na kursie poznałem między innymi:',
      details: [
        'JavaScript, TypeScript, React, ReactNative',
        'Node, Express, SQL, MongoDB',
        'Css, Styled-Components',
        'Git, Figma',
      ],
    },
    {
      id: '2',
      name: 'Zrozumieć React',
      description: 'Zaawansowany kurs react',
      details: [
        'Programowanie w TypeScript',
        'React router, Redux, TanstackQuery',
        'Next.js, Css in JS',
      ],
    },
    {
      id: '3',
      name: '#!/ALX - PROGRAMISTA PHP',
      description:
        '6-miesięczny stacjonarny kurs programowania w języku PHP na którym uczyłem się między innymi:',
      details: [
        'Wstęp do PHP, HTML, CSS, XML',
        'MySQL, Postgres, Diagramy ERD, UML',
        'Programowanie Obiektowe JavaScript',
      ],
    },
  ];
  return (
    <ContainerSection id="experience">
      <h2 className="section-title">KURSY I SZKOLENIA</h2>
      <Container>
        {data.map(({ id, name, description, details }, index, tab) => (
          <Content key={id}>
            <Time>
              <span className="rounder" />
              {index < tab.length - 1 ? <span className="line" /> : null}
            </Time>
            <Data>
              <h3>{name}</h3>
              <p>{description}</p>
              <ul>
                {details.map((item) => (
                  <li key={item}>
                    <div>
                      <BiCheck /> {item}
                    </div>
                  </li>
                ))}
              </ul>
            </Data>
          </Content>
        ))}
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
`;

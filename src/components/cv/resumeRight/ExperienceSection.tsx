import styled from 'styled-components';
import { Content, Data, Time } from '../resumeLeft/EduSection';
import { BiCheck } from 'react-icons/bi';

type dataType = {
  name: string;
  description?: string;
  details: string[];
};

export const ExperienceSection = () => {
  const data: dataType[] = [
    {
      name: 'MEGA KURS JAVASCRIPTU',
      description:
        '14-miesięczny kurs JavaScriptu. Przygotowujący uczestników do pracy jako junior JavaScript Developer, na kursie poznałem między innymi:',
      details: [
        'JavaScript, TypeScript, OOP, FP, ES6+, asynchroniczność',
        'Node.js, Express.js, React.js, NestJS, TypeORM, REST, API, TDD',
        'Bazy relacyjne i nierelacyjne, MySQL, MongoDb, Git, Scrum',
      ],
    },
    {
      name: 'KURS STACJONARNY - PROGRAMISTA PHP',
      description:
        '6-miesięczny stacjonarny kurs programowania w języku PHP na którym uczyłem się między innymi:',
      details: [
        'Wstęp do PHP, HTML, CSS, XML',
        'MySQL, Postgres, Diagramy ERD, UML',
        'Programowanie Obiektowe JavaScript',
      ],
    },
    {
      name: 'KURSY ON-LINE',
      details: [
        'Programowanie w JavaScript',
        'React od podstaw',
        'Zaawansowane projekty w CSS i JavaScript',
        'Node.js, Express i MongoDB',
        'Wprowadzenie do Git i GitHub',
      ],
    },
  ];
  return (
    <ContainerSection id="experience">
      <h2 className="section-title">KURSY I SZKOLENIA</h2>
      <Container>
        {data.map(({ name, description, details }, index, tab) => (
          <Content key={index}>
            <Time>
              <span className="rounder"></span>
              {index < tab.length - 1 ? <span className="line"></span> : null}
            </Time>
            <Data>
              <h3>{name}</h3>
              <p>{description}</p>
              <ul>
                {details.map((item, i) => (
                  <li key={i}>
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
};
const ContainerSection = styled.div`
  padding: 1.5rem;
`;
const Container = styled.div`
  display: grid;
  gap: 1.5rem;
`;

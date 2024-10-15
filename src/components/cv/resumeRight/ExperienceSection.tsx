import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCheck } from 'react-icons/bi';
import { Content, Data, Time } from '../resumeLeft/EduSection';

type DataType = {
  id: string;
  name: string;
  description?: string;
  details: string[];
  url: string;
};

export function ExperienceSection() {
  const data: DataType[] = [
    {
      id: '1',
      name: 'MEGA KURS frontowcy',
      description:
        'A 14-month online course preparing participants for work as a Junior JavaScript Developer. During the course, I learned, among other things:',
      details: [
        'JavaScript, TypeScript',
        'React, ReactNative',
        'Angula',
        'Node, Express, SQL, MongoDB',
        'Css, Styled-Components',
        'Git, Figma',
      ],
      url: 'https://frontowcy.pl/',
    },
    {
      id: '2',
      name: 'Zrozumieć React',
      description: 'Advanced React Course',
      details: [
        'Programming in TypeScript',
        'React router, Redux, TanstackQuery',
        'Next.js, Css in JS',
      ],
      url: 'https://zrozumiecreact.pl/',
    },
    {
      id: '3',
      name: '#!/ALX - PHP Developer',
      description:
        'A 6-month in-person PHP programming course, where I learned, among other things:',
      details: [
        'Introduction to PHP, HTML, CSS, XML',
        'MySQL, Postgres, Diagramy ERD, UML',
        'Object-Oriented Programming in JavaScript',
      ],
      url: 'https://www.alx.pl/',
    },
  ];
  return (
    <ContainerSection id="experience">
      <h2 className="section-title">COURSES AND TRAININGS</h2>
      <Container>
        {data.map(({ id, name, description, details, url }, index, tab) => (
          <Content key={id}>
            <Time>
              <span className="rounder" />
              {index < tab.length - 1 ? <span className="line" /> : null}
            </Time>
            <Data>
              <Link to={url} target="_blank">
                <h3>{name}</h3>
              </Link>
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

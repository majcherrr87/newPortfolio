import styled from 'styled-components';

type dataType = {
  name: string;
  description: string;
  link: string[];
};

export const ProjectsSection = () => {
  const data: dataType[] = [
    {
      name: 'Head Hunter [NestJS React TypeScript]',
      description:
        'Projekt Head Hunter to ostatni etap rocznego Bootcampu Full Stack JS, tworzony był w systemie Scrum 6 osobowym zespole. Aplikacja łączy w sobie całą wiedze i technologie, którą uczyliśmy sie podczas bootcampu. Aplikacja została stworzona,aby łączyć przyszłych programistów z rekruterami.',
      link: [
        'https://github.com/tomczer2t/head_hunter_front',
        'https://github.com/tomczer2t/head_hunter_back',
      ],
    },
    {
      name: 'Zamówienia e-mail [Express React TypeScript]',
      description:
        'Projekt Zamówienia e-mail został stworzony na potrzeby restauracji. Dzięki Aplikacji można storzyć baze dostawców towaru oraz przypisać do nich produkty, a następnie dokonywać zamówień drogą e-mail.',
      link: [
        'https://github.com/majcherrr87/zamowienia_email_front',
        'https://github.com/majcherrr87/zamowienia_email_back',
      ],
    },
    {
      name: 'Portfolio [React]',
      description:
        'Aplikacja portfolio została napisana z wykorzystaniem biblioteki React, można na niej dowiedzieć się więcej na temat mojej osoby, zobaczyć ukończone projekty a także wysłać z niej e-maila do mnie.',
      link: [
        'https://github.com/majcherrr87/Portfolio',
        'https://www.majcher.networkmanager.pl',
      ],
    },
  ];
  return (
    <ContainerSection id="projects">
      <h2 className="section-title">Projekty</h2>
      <Container>
        {data.map(({ name, description, link }, index) => (
          <Content key={index}>
            <h3>{name}</h3>
            <ul>
              {link.map((el, i) => (
                <li key={i}>
                  <a href={el} target="_blank">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
            <p>{description}</p>
          </Content>
        ))}
      </Container>
    </ContainerSection>
  );
};
export const ContainerSection = styled.div`
  padding: 1.5rem;
`;
export const Container = styled.div`
  display: grid;
  gap: 1.5rem;
`;
export const Content = styled.div`
  display: grid;
  gap: 0.5rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      font-size: 1.5rem;
    }
  }

  ul li a {
    word-break: break-all;
    color: #00a29c;
    margin-left: 0.5rem;
  }
  p a {
    word-break: break-all;
    color: #00a29c;
    margin-left: 0.5rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.h3_font_size};
    // margin-bottom: ${({ theme }) => theme.margins.mb_1};
    svg {
      font-size: ${({ theme }) => theme.font.h2_font_size};
    }
  }
`;

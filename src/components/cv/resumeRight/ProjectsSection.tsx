import styled from 'styled-components';

type DataType = {
  name: string;
  description: string;
  link: string[];
};

export function ProjectsSection() {
  const data: DataType[] = [
    {
      name: 'Portfolio [React]',
      description:
        'The portfolio application was built using the React library. It provides more information about me, showcases completed projects, and allows users to send me an email.',
      link: [
        'https://github.com/majcherrr87/newPortfolio',
        'https://majcher.netlify.app/',
      ],
    },
    {
      name: 'Head Hunter [NestJS React TypeScript]',
      description:
        'The Head Hunter project is the final stage of a year-long Full Stack JS Bootcamp, developed in a Scrum framework by a team of six. The application integrates all the knowledge and technologies we learned during the bootcamp. It was created to connect future developers with recruiters.',
      link: [
        'https://github.com/tomczer2t/head_hunter_front',
        'https://github.com/tomczer2t/head_hunter_back',
      ],
    },
    {
      name: 'Email Orders [Express React TypeScript]',
      description:
        "The Email Orders project was created for a restaurant's needs. The application allows users to create a database of suppliers and assign products to them, and then place orders via email.",
      link: [
        'https://github.com/majcherrr87/zamowienia_email_front',
        'https://github.com/majcherrr87/zamowienia_email_back',
      ],
    },
  ];
  return (
    <ContainerSection id="projects">
      <h2 className="section-title">Projects</h2>
      <Container>
        {data.map(({ name, description, link }) => (
          <Content key={name}>
            <h3>{name}</h3>
            <ul>
              {link.map((el) => (
                <li key={el}>
                  <a href={el} target="_blank" rel="noopener noreferrer">
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
}
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
    a {
      color: #00a29c;
    }
  }
`;

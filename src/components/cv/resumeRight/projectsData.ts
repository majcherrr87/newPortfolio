type Project = {
  name: string;
  description: string;
  link: string[];
};
type ProjectDataType = {
  id: number;
  lang: string;
  title: string;
  project: Project[];
};
export const projectsData: ProjectDataType[] = [
  {
    id: 1,
    lang: 'english',
    title: 'Projects',
    project: [
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
    ],
  },
  {
    id: 2,
    lang: 'polish',
    title: 'Projekty',
    project: [
      {
        name: 'Portfolio [React]',
        description:
          'Aplikacja portfolio została zbudowana przy użyciu biblioteki React. Zawiera więcej informacji o mnie, prezentuje zrealizowane projekty i umożliwia użytkownikom wysyłanie do mnie wiadomości e-mail.',
        link: [
          'https://github.com/majcherrr87/newPortfolio',
          'https://majcher.netlify.app/',
        ],
      },
      {
        name: 'Head Hunter [NestJS React TypeScript]',
        description:
          'Projekt Head Hunter jest finałowym etapem rocznego bootcampu Full Stack JS, opracowanym w ramach Scrum przez zespół sześciu osób. Aplikacja integruje całą wiedzę i technologie, które zdobyliśmy podczas bootcampu. Została stworzona, aby połączyć przyszłych programistów z rekruterami.',
        link: [
          'https://github.com/tomczer2t/head_hunter_front',
          'https://github.com/tomczer2t/head_hunter_back',
        ],
      },
      {
        name: 'Zamówienia E-mail [Express React TypeScript]',
        description:
          'Projekt Zamówienia E-mail został stworzony na potrzeby restauracji. Aplikacja umożliwia użytkownikom tworzenie bazy dostawców i przypisywanie do nich produktów, a następnie składanie zamówień za pośrednictwem e-maila.',
        link: [
          'https://github.com/majcherrr87/zamowienia_email_front',
          'https://github.com/majcherrr87/zamowienia_email_back',
        ],
      },
    ],
  },
];

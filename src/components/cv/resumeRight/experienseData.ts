type Course = {
  id: number;
  name: string;
  description?: string;
  details: string[];
  url: string;
};
type DataTypeWithLang = {
  id: number;
  lang: string;
  title: string;
  courses: Course[];
};

export const experienseData: DataTypeWithLang[] = [
  {
    id: 1,
    lang: 'english',
    title: 'COURSES AND TRAININGS',
    courses: [
      {
        id: 1,
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
        url: 'https://www.linkedin.com/company/megak/?originalSubdomain=pl',
      },
      {
        id: 2,
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
        id: 3,
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
    ],
  },
  {
    id: 2,
    lang: 'polish',
    title: 'KURSY I SZKOLENIA',
    courses: [
      {
        id: 1,
        name: 'MEGA KURS frontowcy',
        description:
          '14-miesięczny kurs online przygotowujący uczestników do pracy jako Junior JavaScript Developer. Podczas kursu nauczyłem się między innymi:',
        details: [
          'JavaScript, TypeScript',
          'React, ReactNative',
          'Angular',
          'Node, Express, SQL, MongoDB',
          'CSS, Styled-Components',
          'Git, Figma',
        ],
        url: 'https://frontowcy.pl/',
      },
      {
        id: 2,
        name: 'Zrozumieć React',
        description: 'Zaawansowany kurs React',
        details: [
          'Programowanie w TypeScript',
          'React Router, Redux, TanstackQuery',
          'Next.js, CSS w JS',
        ],
        url: 'https://zrozumiecreact.pl/',
      },
      {
        id: 3,
        name: '#!/ALX - PHP Developer',
        description:
          '6-miesięczny stacjonarny kurs programowania PHP, podczas którego nauczyłem się między innymi:',
        details: [
          'Wprowadzenie do PHP, HTML, CSS, XML',
          'MySQL, Postgres, Diagramy ERD, UML',
          'Programowanie obiektowe w JavaScript',
        ],
        url: 'https://www.alx.pl/',
      },
    ],
  },
];

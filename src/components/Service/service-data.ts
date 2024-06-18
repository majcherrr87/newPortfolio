import udemy from '../../assets/img/courses/udemy.webp';
import alx from '../../assets/img/courses/alx.webp';
import megaK from '../../assets/img/courses/megak.webp';
import zrozumiecReact from '../../assets/img/courses/zrozumiecReact.webp';

interface DataType {
  id: number;
  lang: string;
  txtTitleFirst: string;
  txtTitleSecond: string;
  txtTitleBig: string;
  card: CardType[];
}
export interface CardType {
  img: string;
  title: string;
  disc: string;
  link: string;
  skills: string[];
}

const data: DataType[] = [
  {
    id: 1,
    lang: 'POL',
    txtTitleFirst: 'Moje',
    txtTitleSecond: 'Kursy',
    txtTitleBig: 'Zdobyta wiedza',
    card: [
      {
        img: megaK,
        title: 'Mega Kurs JavaScript',
        disc: `14-miesięczny kurs JavaScriptu. Przygotowujący uczestników do pracy jako junior JavaScript Developer`,
        link: 'https://www.megak.pl/',
        skills: [
          'JavaScript, TypeScript',
          'Node.js, Express.js, Handlebars',
          'Bazy relacyjne i nierelacyjne, MySQL, MongoDb',
          'React',
          'NestJS, TypeORM,',
          'Figma',
          'Git, Scrum,',
        ],
      },
      {
        img: zrozumiecReact,
        title: 'Zrozumieć React',
        disc: 'Kurs obejmował ponad 30 godzin materiałów wideo, ponad 150 zadań i 6-godzinny projekt praktyczny.',
        link: 'https://drive.google.com/file/d/1tEme4gg6umZ8yLG9hYdh9yBq2ytPFc6o/view?usp=drive_link',
        skills: [
          'React',
          'React Router',
          'Wstęp do Next.js',
          'CSS Modules, CSS in JS, Tailwind CSS',
          'Testowanie',
        ],
      },
      {
        img: alx,
        title: 'Programista PHP',
        disc: `Kurs stacjonarny - Programista PHP`,
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
        skills: [
          'Wstęp do PHP, HTML, CSS, XML',
          'Praca z danymi MySQL-a i Postgresa',
          'Diagramy ERD, UML',
          'Programowanie Obiektowe',
          'JavaScript',
        ],
      },
    ],
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'My',
    txtTitleSecond: 'Courses',
    txtTitleBig: 'Acquired Knowledge',
    card: [
      {
        img: megaK,
        title: 'Mega JavaScript Course',
        disc: '14-month JavaScript course. Prepares participants for work as junior JavaScript Developers.',
        link: 'https://www.megak.pl/',
        skills: [
          'JavaScript, TypeScript',
          'Node.js, Express.js, Handlebars',
          'Relational and non-relational databases, MySQL, MongoDb',
          'React',
          'NestJS, TypeORM,',
          'Figma',
          'Git, Scrum,',
        ],
      },
      {
        img: zrozumiecReact,
        title: 'Understanding React',
        disc: 'The course included over 30 hours of video materials, over 150 tasks, and a 6-hour practical project.',
        link: 'https://drive.google.com/file/d/1tEme4gg6umZ8yLG9hYdh9yBq2ytPFc6o/view?usp=drive_link',
        skills: [
          'React',
          'React Router',
          'Introduction to Next.js',
          'CSS Modules, CSS in JS, Tailwind CSS',
          'Testing',
        ],
      },
      {
        img: alx,
        title: 'PHP Programmer',
        disc: 'In-person course - PHP Programmer',
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
        skills: [
          'Introduction to PHP, HTML, CSS, XML',
          'Working with MySQL and Postgres data',
          'ERD, UML diagrams',
          'Object-Oriented Programming',
          'JavaScript',
        ],
      },
    ],
  },
];
export default data;

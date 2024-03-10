import udemy from '../../assets/img/courses/udemy.webp';
import alx from '../../assets/img/courses/alx.webp';
import megaK from '../../assets/img/courses/megak.webp';

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
          'JavaScript, TypeScript, OOP, FP, ES6+, asynchroniczność',
          'Node.js, Express.js, Handlebars, REST, API, TDD',
          'Bazy relacyjne i nierelacyjne, MySQL, MongoDb',
          'React.js',
          'NestJS, TypeORM,',
          'Git, Scrum,',
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
      {
        img: udemy,
        title: 'Kursy On-line',
        disc: ' ',
        link: 'https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/',
        skills: [
          'Programowanie w JavaScript',
          'React od podstaw',
          'Zaawansowane projekty w CSS i JavaScript',
          'Node.js, Express i MongoDB',
          'Wprowadzenie do Git i GitHub',
        ],
      },
    ],
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'My',
    txtTitleSecond: 'Courses',
    txtTitleBig: 'Acquired knowledge',
    card: [
      {
        img: megaK,
        title: 'Mega Kurs JavaScript',
        disc: `14-month JavaScript course. Preparing participants to work as a junior JavaScript Developer`,
        link: 'https://www.megak.pl/',
        skills: [
          'JavaScript, TypeScript, OOP, FP, ES6+, asynchronicity',
          'Node.js, Express.js, Handlebars, REST, API, TDD',
          'Relational and non-relational databases, MySQL, MongoDb',
          'React.js',
          'NestJS, TypeORM,',
          'Git, Scrum,',
        ],
      },
      {
        img: alx,
        title: 'PHP Programmer',
        disc: `Stationary course - PHP Programmer`,
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
        skills: [
          'Introduction to PHP, HTML, CSS, XML',
          'Working with MySQL and Postgres data',
          'ERD, UML diagrams',
          'Object-Oriented Programming',
          'JavaScript',
        ],
      },
      {
        img: udemy,
        title: 'Online courses',
        disc: ' ',
        link: 'https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/',
        skills: [
          'Programming in JavaScript',
          'React from scratch',
          'Advanced projects in CSS and JavaScript',
          'Node.js, Express i MongoDB',
          'Introduction to Git and GitHub',
        ],
      },
    ],
  },
];
export default data;

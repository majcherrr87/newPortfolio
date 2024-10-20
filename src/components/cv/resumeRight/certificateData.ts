type Certificate = {
  name: string;
  link: string;
};

type Certificates = {
  id: number;
  title: string;
  lang: string;
  subTitle: string;
  certificate: Certificate[];
};

export const certificatesData: Certificates[] = [
  {
    id: 1,
    lang: 'english',
    title: 'Certificates',
    subTitle: 'see',
    certificate: [
      {
        name: 'Course Understanding React',
        link: 'https://drive.google.com/file/d/1tEme4gg6umZ8yLG9hYdh9yBq2ytPFc6o/view?usp=sharing',
      },
      {
        name: 'Course PHP Developer',
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
      },
      {
        name: 'Course Programming in JavaScript',
        link: 'https://www.udemy.com/certificate/UC-b8482c60-374a-41f7-9c30-205a21f24eba/',
      },
      {
        name: 'Course React from Scratch',
        link: 'https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/',
      },
    ],
  },
  {
    id: 2,
    lang: 'polish',
    title: 'Certyfikaty',
    subTitle: 'zobacz',
    certificate: [
      {
        name: 'Kurs Zrozumieć React',
        link: 'https://drive.google.com/file/d/1tEme4gg6umZ8yLG9hYdh9yBq2ytPFc6o/view?usp=sharing',
      },
      {
        name: 'Kurs PHP Developer',
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
      },
      {
        name: 'Kurs Programowanie w JavaScript',
        link: 'https://www.udemy.com/certificate/UC-b8482c60-374a-41f7-9c30-205a21f24eba/',
      },
      {
        name: 'Kurs React od podstaw',
        link: 'https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/',
      },
    ],
  },
];

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
        name: 'MegaK Frontowcy',
        link: 'https://drive.google.com/file/d/1O7l6x-HKtllQjSrwmG3iweBjCNn349yI/view?usp=sharing',
      },
      {
        name: 'Kurs Zrozumieć React',
        link: 'https://drive.google.com/file/d/1tEme4gg6umZ8yLG9hYdh9yBq2ytPFc6o/view?usp=sharing',
      },
      {
        name: 'Kurs PHP Developer',
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
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
        name: 'MegaK Frontowcy',
        link: 'https://drive.google.com/file/d/1O7l6x-HKtllQjSrwmG3iweBjCNn349yI/view?usp=sharing',
      },
      {
        name: 'Kurs Zrozumieć React',
        link: 'https://drive.google.com/file/d/1tEme4gg6umZ8yLG9hYdh9yBq2ytPFc6o/view?usp=sharing',
      },
      {
        name: 'Kurs PHP Developer',
        link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
      },
    ],
  },
];

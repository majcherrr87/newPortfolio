export type CopyrightDataType = {
  id: number;
  lang: string;
  txt: string;
};

export const CopyrightData: CopyrightDataType[] = [
  {
    id: 1,
    lang: 'POL',
    txt: `Wszelkie prawa zastrzeżone `,
  },
  {
    id: 2,
    lang: 'ENG',
    txt: 'All rights reserved ',
  },
];

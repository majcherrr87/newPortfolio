export interface DataType {
  id: number;
  lang: string;
  txtTitleFirst: string;
  txtTitleSecond: string;
  txtButton: string;
}

export const mainProjectData: DataType[] = [
  {
    id: 1,
    lang: 'POL',
    txtTitleFirst: 'Moje',
    txtTitleSecond: 'Projekty',
    txtButton: 'Zobacz Projekt',
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'My',
    txtTitleSecond: 'Projects',
    txtButton: 'Live demo',
  },
];

export interface DataType {
  id: number;
  lang: string;
  txtTitleFirst: string;
  txtTitleSecond: string;
  txtButtonGithub: string;
  txtButtonLiveDemo: string;
}

export const mainProjectData: DataType[] = [
  {
    id: 1,
    lang: 'POL',
    txtTitleFirst: 'Moje',
    txtTitleSecond: 'Projekty',
    txtButtonLiveDemo: 'Pokaz na żywo',
    txtButtonGithub: 'Zobacz kod',
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'My',
    txtTitleSecond: 'Projects',
    txtButtonLiveDemo: 'Live demo',
    txtButtonGithub: 'View code',
  },
];

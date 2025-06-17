export interface DataType {
  id: number;
  lang: string;
  txtTitleFirst: string;
  txtTitleSecond: string;
  txtButtonGithub: string;
  txtButtonLiveDemo: string;
  txtShowMore: string;
  txtShowLess: string;
}

export const mainProjectData: DataType[] = [
  {
    id: 1,
    lang: 'POL',
    txtTitleFirst: 'Moje',
    txtTitleSecond: 'Projekty',
    txtButtonLiveDemo: 'Pokaz na żywo',
    txtButtonGithub: 'Zobacz kod',
    txtShowMore: 'Pokaż więcej',
    txtShowLess: 'Pokaż mniej',
  },
  {
    id: 2,
    lang: 'ENG',
    txtTitleFirst: 'My',
    txtTitleSecond: 'Projects',
    txtButtonLiveDemo: 'Live demo',
    txtButtonGithub: 'View code',
    txtShowMore: 'Show more',
    txtShowLess: 'Show less',
  },
];

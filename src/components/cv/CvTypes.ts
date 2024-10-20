export type VisibleBtnScrollTypes = {
  isVisibleMenu: (value: boolean) => void;
};

export type CvContextType = {
  language: string;
  setLanguage: (prevlang: string) => void;
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
};

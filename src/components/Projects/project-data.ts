import thisApp from '../../assets/img/project/ThisApp.webp';
import img4 from '../../assets/img/project/project4.webp';
import imageFdf from '../../assets/img/project/ImageFdf.webp';
import ProjectReactNative from '../../assets/img/project/ProjectReactNative.webp';
import fdf from '../../assets/video/fdf.webm';
import WeatherApp from '../../assets/video/WeatherApp.webm';
import proj1 from '../../assets/video/qqqq.webm';

export interface ProjectDataType {
  id: number;
  lang: string;
  projects: ProjectType[];
}
export interface ProjectType {
  index: number;
  title: string;
  disc: string;
  linkGitHub: string;
  linkDemo: string;
  technologies: string[];
  srcImg: string;
  srcVideo: string;
}

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    lang: 'POL',
    projects: [
      {
        index: 0,
        title: 'WeatherApp',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: 'https://github.com/majcherrr87/LearningReactNative',
        linkDemo: ``,
        technologies: ['ReactNatve'],
        srcImg: ProjectReactNative,
        srcVideo: WeatherApp,
      },
      {
        index: 1,
        title: 'Fabryka dobrej formy',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się 
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni `,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [
          'TypeSctipt',
          'React',
          'StyledComponent',
          'TanStack Query',
          'MongoDB',
        ],
        srcImg: imageFdf,
        srcVideo: fdf,
      },
      {
        index: 2,
        title: 'Project 4',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img4,
        srcVideo: '',
      },
      {
        index: 3,
        title: 'Portfolio',
        disc: `Strona internetowa zbudowana została przy użyciu języka programowania TypeScript i biblioteki frameworka React. Do stylizacji komponentów React użyto biblioteki Styled Components. Dodatkowo strona internetowa posiada funkcjonalność wysyłania e-maili bezpośrednio do użytkownika za pomocą biblioteki EmailJS. Strona korzysta również z API Ninjas do zliczania liczby odwiedzających oraz zawiera informacje o ukończonych kursach i edukacji użytkownika.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/`,
        technologies: ['TypeSctipt', 'React', 'Redux', 'StyledComponent'],
        srcImg: thisApp,
        srcVideo: proj1,
      },
    ],
  },
  {
    id: 2,
    lang: 'ENG',
    projects: [
      {
        index: 0,
        title: 'WeatherApp',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: 'https://github.com/majcherrr87/LearningReactNative',
        linkDemo: ``,
        technologies: ['ReactNatve'],
        srcImg: ProjectReactNative,
        srcVideo: WeatherApp,
      },
      {
        index: 1,
        title: 'Fabryka dobrej formy',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się 
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni `,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [
          'TypeSctipt',
          'React',
          'StyledComponent',
          'TanStack Query',
          'MongoDB',
        ],
        srcImg: imageFdf,
        srcVideo: fdf,
      },
      {
        index: 2,
        title: 'Project 4',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img4,
        srcVideo: '',
      },
      {
        index: 3,
        title: 'Portfolio',
        disc: `Strona internetowa zbudowana została przy użyciu języka programowania TypeScript i biblioteki frameworka React. Do stylizacji komponentów React użyto biblioteki Styled Components. Dodatkowo strona internetowa posiada funkcjonalność wysyłania e-maili bezpośrednio do użytkownika za pomocą biblioteki EmailJS. Strona korzysta również z API Ninjas do zliczania liczby odwiedzających oraz zawiera informacje o ukończonych kursach i edukacji użytkownika.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/`,
        technologies: ['TypeSctipt', 'React', 'Redux', 'StyledComponent'],
        srcImg: thisApp,
        srcVideo: proj1,
      },
    ],
  },
];

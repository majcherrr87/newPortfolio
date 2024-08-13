import img1 from '../../assets/img/project/project1.webp';
import thisApp from '../../assets/img/project/ThisApp.webp';
import img3 from '../../assets/img/project/project3.webp';
import img4 from '../../assets/img/project/project4.webp';
import img5 from '../../assets/img/project/project5.webp';
import imageFdf from '../../assets/img/project/ImageFdf.webp';
import ProjectReactNative from '../../assets/img/project/ProjectReactNative.webp';
import fdf from '../../assets/video/fdf.webm';
import WeatherApp from '../../assets/video/weatherApp.webm';

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
        title: 'Portfolio',
        disc: `Strona internetowa zbudowana została przy użyciu języka programowania TypeScript i biblioteki frameworka React. Do stylizacji komponentów React użyto biblioteki Styled Components. Dodatkowo strona internetowa posiada funkcjonalność wysyłania e-maili bezpośrednio do użytkownika za pomocą biblioteki EmailJS. Strona korzysta również z API Ninjas do zliczania liczby odwiedzających oraz zawiera informacje o ukończonych kursach i edukacji użytkownika.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/`,
        technologies: ['TypeSctipt', 'React', 'Redux', 'StyledComponent'],
        srcImg: thisApp,
        srcVideo: proj1,
      },
      {
        index: 1,
        title: 'WeatherApp',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: 'https://github.com/majcherrr87/LearningReactNative',
        linkDemo: ``,
        technologies: [],
        srcImg: ProjectReactNative,
        srcVideo: WeatherApp,
      },
      {
        index: 2,
        title: 'Fabryka dobrej formy',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się 
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .
        To jest polski text który jeswiadomo co tu wpisać to się zmieni .
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać ttu wpisać to się zmieni .zmieni .`,
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
        index: 3,
        title: 'Project 4',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img4,
        srcVideo: '',
      },
    ],
  },
  {
    id: 2,
    lang: 'ENG',
    projects: [
      {
        index: 0,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img1,
        srcVideo: fdf,
      },
      {
        index: 1,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: thisApp,
        srcVideo: proj1,
      },
      {
        index: 2,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img3,
        srcVideo: '',
      },
      {
        index: 3,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img4,
        srcVideo: '',
      },
      {
        index: 4,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [],
        srcImg: img5,
        srcVideo: '',
      },
    ],
  },
];

import img1 from '../../assets/img/project/project1.webp';
import fdf from '../../assets/video/fdf.webm';
import proj1 from '../../assets/video/qqqq.webm';

export interface ProjectDataType {
  id: number;
  lang: string;
  projects: Project[];
}
interface Project {
  index: number;
  title: string;
  disc: string;
  linkGitHub: string;
  linkDemo: string;
  src: string;
}

export const project_data: ProjectDataType[] = [
  {
    id: 1,
    lang: 'POL',
    projects: [
      {
        index: 0,
        title: 'Moja strona',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się 
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .
        To jest polski text który jeswiadomo co tu wpisać to się zmieni .
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać ttu wpisać to się zmieni .zmieni .`,
        linkGitHub: `#`,
        linkDemo: `#`,
        src: fdf,
      },
      {
        index: 1,
        title: '@ui/ux designer PL',
        disc: `To jest polski text którę zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: proj1,
      },
      {
        index: 2,
        title: '@ui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
      },
      {
        index: 3,
        title: 'ui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
      },
      {
        index: 4,
        title: 'ui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
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
        src: img1,
      },
      {
        index: 1,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
      },
      {
        index: 2,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
      },
      {
        index: 3,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
      },
      {
        index: 4,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        src: img1,
      },
    ],
  },
];

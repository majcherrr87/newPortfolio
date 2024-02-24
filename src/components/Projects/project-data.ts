import img1 from '../../assets/img/project/project1.webp';
import img2 from '../../assets/img/project/project2.webp';
import img3 from '../../assets/img/project/project3.webp';
import img4 from '../../assets/img/project/project4.webp';
import img5 from '../../assets/img/project/project5.webp';
import fdf from '../../assets/video/fdf.webm';
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
        title: 'Fabryka dobrej formy',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się 
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .
        To jest polski text który jeswiadomo co tu wpisać to się zmieni .
        To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać ttu wpisać to się zmieni .zmieni .`,
        linkGitHub: `#`,
        linkDemo: `#`,
        srcImg: img1,
        srcVideo: fdf,
      },
      {
        index: 1,
        title: 'Portfolio',
        disc: `To jest polski text którę zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img2,
        srcVideo: proj1,
      },
      {
        index: 2,
        title: 'Project 3',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img3,
        srcVideo: '',
      },
      {
        index: 3,
        title: 'Project 4',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img4,
        srcVideo: '',
      },
      {
        index: 4,
        title: 'Project 5',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img5,
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
        srcImg: img1,
        srcVideo: '',
      },
      {
        index: 1,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img2,
        srcVideo: '',
      },
      {
        index: 2,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img3,
        srcVideo: '',
      },
      {
        index: 3,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img4,
        srcVideo: '',
      },
      {
        index: 4,
        title: 'eeeui/ux designer PL',
        disc: `To jest polski text który jest tutaj tylko na próbę jak będzie wiadomo co tu wpisać to się zmieni .`,
        linkGitHub: ``,
        linkDemo: ``,
        srcImg: img5,
        srcVideo: '',
      },
    ],
  },
];

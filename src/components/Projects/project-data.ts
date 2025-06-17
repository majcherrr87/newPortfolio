import thisApp from '../../assets/img/project/ThisApp.webp';
import portfolioVideo from '../../assets/video/portfolioVideo.webm';
import fdfImage from '../../assets/img/project/fdfImage.webp';
import fdfVideo from '../../assets/video/fdf.webm';
import ProjectReactNative from '../../assets/img/project/ProjectReactNative.webp';
import WeatherApp from '../../assets/video/WeatherApp.webm';
import cvVideo from '../../assets/video/CVvideo.webm';
import cvImage from '../../assets/img/project/CVImage.webp';
import videoAppVideo from '../../assets/video/videoApp.webm';
import videoAppImage from '../../assets/img/project/VideoApp.webp';

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
        disc: `Strona internetowa zbudowana została przy użyciu TypeScript i biblioteki React. Do stylizacji komponentów React użyto biblioteki Styled Components. Dodatkowo strona internetowa posiada funkcjonalność wysyłania e-maili bezpośrednio do użytkownika za pomocą biblioteki EmailJS. Strona korzysta również z API Ninjas do zliczania liczby odwiedzających oraz zawiera informacje o ukończonych kursach i edukacji użytkownika.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/`,
        technologies: ['TypeSctipt', 'React', 'Redux', 'StyledComponent'],
        srcImg: thisApp,
        srcVideo: portfolioVideo,
      },
      {
        index: 1,
        title: 'YouTube Video Learn',
        disc: `Aplikacja mobilna napisana w React Native z wykorzystaniem Expo i\u00A0TypeScript, umożliwiająca wyszukiwanie oraz wyświetlanie filmów z\u00A0serwisu YouTube. Po stronie backendu zastosowałem Express, aby bezpiecznie ukryć klucz API YouTube. Użytkownik może w intuicyjny sposób przeszukiwać zasoby YouTube i oglądać wybrane materiały wideo bezpośrednio w aplikacji.`,
        linkGitHub: `https://github.com/majcherrr87/ReactNativeVideoApp`,
        linkDemo: `https://expo.dev/accounts/adrianmajcher/projects/ReactNativeVideoApp`,
        technologies: [
          'React Native',
          'Expo',
          'TypeSctipt',
          'YouTube API',
          'Express',
        ],
        srcImg: videoAppImage,
        srcVideo: videoAppVideo,
      },
      {
        index: 2,
        title: 'Web CV',
        disc: `Web CV to projekt stworzony przy użyciu React z TypeScript oraz StyledComponents, który umożliwia prezentację mojego CV w atrakcyjnej i interaktywnej formie. Użytkownicy mogą przeglądać wszystkie sekcje mojego CV bezpośrednio na stronie oraz mają opcję pobrania go w formacie PDF, co ułatwia dostęp do wersji offline.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/cv`,
        technologies: ['TypeSctipt', 'React', 'StyledComponent'],
        srcImg: cvImage,
        srcVideo: cvVideo,
      },
      {
        index: 3,
        title: 'WeatherApp',
        disc: `Aplikacja mobilna stworzona przy użyciu React Native umożliwia użytkownikom pobieranie aktualnych informacji o pogodzie. Użytkownicy mogą uzyskać prognozę pogody na podstawie swojej bieżącej lokalizacji dzięki wykorzystaniu geolokalizacji, jak również poprzez ręczne wprowadzenie nazwy miejscowości. Dane pogodowe są prezentowane w czytelny sposób, a za stylizację komponentów odpowiada Styled Components, co pozwala na dynamiczne i eleganckie dopasowanie interfejsu do potrzeb użytkownika. Aplikacja charakteryzuje się nowoczesnym designem i intuicyjną obsługą.`,
        linkGitHub: 'https://github.com/majcherrr87/LearningReactNative',
        linkDemo: ``,
        technologies: ['ReactNatve', 'StyledComponent'],
        srcImg: ProjectReactNative,
        srcVideo: WeatherApp,
      },
      {
        index: 4,
        title: 'Fabryka dobrej formy',
        disc: `Obecnie pracuję nad stroną internetową dla Fabryki Dobrej Formy. \u00A0 Strona będzie oparta na technologii React i napisana w TypeScript.  Do zarządzania danymi wykorzystam TanStack Query, a za stylowanie odpowiedzialne będą Styled Components`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [
          'TypeSctipt',
          'React',
          'StyledComponent',
          'TanStack Query',
          'MongoDB',
        ],
        srcImg: fdfImage,
        srcVideo: fdfVideo,
      },
    ],
  },
  {
    id: 2,
    lang: 'ENG',
    projects: [
      {
        index: 0,
        title: 'Portfolio',
        disc: `The website was built using TypeScript and the React library. For styling React components, the Styled Components library was used. Additionally, the website features email functionality, allowing emails to be sent directly to the user via the EmailJS library. The website also uses the Ninja API to track the number of visitors and includes information about the user's completed courses and education.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents'],
        srcImg: thisApp,
        srcVideo: portfolioVideo,
      },
      {
        index: 1,
        title: 'YouTube Video Learn',
        disc: `A mobile application developed in React Native using Expo and TypeScript, allowing users to search for and display videos from YouTube. On the backend, I used Express to securely hide the YouTube API key. Users can intuitively browse YouTube content and watch selected videos directly within the app.`,
        linkGitHub: `https://github.com/majcherrr87/ReactNativeVideoApp`,
        linkDemo: `https://expo.dev/accounts/adrianmajcher/projects/ReactNativeVideoApp`,
        technologies: [
          'React Native',
          'Expo',
          'TypeSctipt',
          'YouTube API',
          'Express',
        ],
        srcImg: videoAppImage,
        srcVideo: videoAppVideo,
      },
      {
        index: 2,
        title: 'Web CV',
        disc: `Web CV is a project created using React with TypeScript and Styled Components, allowing the presentation of my CV in an attractive and interactive form. Users can browse all sections of my CV directly on the website and have the option to download it as a PDF, making it easier to access offline versions.`,
        linkGitHub: `https://github.com/majcherrr87/newPortfolio`,
        linkDemo: `https://majcher.netlify.app/cv`,
        technologies: ['TypeScript', 'React', 'StyledComponents'],
        srcImg: cvImage,
        srcVideo: cvVideo,
      },
      {
        index: 3,
        title: 'WeatherApp',
        disc: `This mobile application, created using React Native, allows users to retrieve current weather information. Users can get weather forecasts based on their current location using geolocation or by manually entering the city name. The weather data is presented in a clear format, and Styled Components is used for styling, enabling dynamic and elegant interface adjustments according to user needs. The app features a modern design and intuitive operation.`,
        linkGitHub: 'https://github.com/majcherrr87/LearningReactNative',
        linkDemo: ``,
        technologies: ['ReactNative', 'StyledComponents'],
        srcImg: ProjectReactNative,
        srcVideo: WeatherApp,
      },
      {
        index: 4,
        title: 'Fabryka Dobrej Formy',
        disc: `I am currently working on a website for Fabryka Dobrej Formy. The site will be built using React and TypeScript. TanStack Query will be used for data management, and Styled Components will handle styling.`,
        linkGitHub: ``,
        linkDemo: ``,
        technologies: [
          'TypeScript',
          'React',
          'StyledComponents',
          'TanStack Query',
          'MongoDB',
        ],
        srcImg: fdfImage,
        srcVideo: fdfVideo,
      },
    ],
  },
];

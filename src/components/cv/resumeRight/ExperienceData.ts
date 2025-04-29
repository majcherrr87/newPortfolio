type Course = {
  id: number;
  name: string;
  description?: string;
  details: string[];
  url: string;
};
type DataTypeWithLang = {
  id: number;
  lang: string;
  title: string;
  courses: Course[];
};

export const CoursesData: DataTypeWithLang[] = [
  {
    id: 2,
    lang: 'english',
    title: 'Experience',
    courses: [
      {
        id: 1,
        name: 'Fabryka Dobrej Formy',
        description:
          "I developed a responsive website for Fabryka Dobrej Formy. The project's goal was to showcase the company's services and facilitate easy contact and service booking for clients.",
        details: [
          "Designed a user interface aligned with the brand's visual identity",
          'Optimized the website for (SEO) and loading speed',
          'Adapted the website for mobile devices (RWD)',
          'Implemented the WordPress content management system (CMS)',
        ],
        url: 'https://fabrykadobrejformy.pl/',
      },
    ],
  },
  {
    id: 2,
    lang: 'polish',
    title: 'Dośwaiadczenie',
    courses: [
      {
        id: 1,
        name: 'Fabryka dobrej formy',
        description:
          'Stworzyłem responsywną stronę internetową dla Fabryki Dobrej Formy. Celem projektu było zaprezentowanie oferty firmy oraz umożliwienie klientom łatwego kontaktu i zapisu na usługi',
        details: [
          'Projektowanie interfejsu użytkownika zgodnego wizerunkiem marki',
          'Optymalizacja strony pod kątem (SEO) i szybkości ładowania',
          'Dostosowanie strony do urządzeń mobilnych (RWD)',
          'Wdrożenie systemu zarządzania treścią (CMS) WordPress',
        ],
        url: 'https://fabrykadobrejformy.pl/',
      },
    ],
  },
];

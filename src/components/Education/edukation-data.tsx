export type EducationDataType = {
  id: number;
  lang: string;
  sectionTitle: string;
  name: string;
  description: string;
  data: string;
};
export const dataEducation: EducationDataType[] = [
  {
    id: 1,
    lang: 'POL',
    sectionTitle: 'kacja',
    name: 'Wyższa szkoła zarządzania i Administracji',
    description: 'Inżynier Oprogramowania',
    data: 'Zamość 2013 - 2017',
  },
  {
    id: 2,
    lang: 'ENG',
    sectionTitle: 'cation',
    name: 'College of Management and Administration',
    description: 'Software engineer',
    data: 'Zamość 2013 - 2017',
  },
];

import { FaHiking } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import { BiBook, BiDumbbell, BiRun } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

type Intrest = {
  id: number;
  title: string;
  subTitle: string;
  icon: IconType;
};

type Intrests = {
  id: number;
  lang: string;
  title: string;
  intrest: Intrest[];
};
export const intrestData: Intrests[] = [
  {
    id: 1,
    lang: 'english',
    title: 'Interests',
    intrest: [
      {
        id: 1,
        title: 'Running',
        subTitle: 'Cross-country running',
        icon: BiRun,
      },
      {
        id: 2,
        title: 'Trips',
        subTitle: 'Hiking trips',
        icon: FaHiking,
      },
      {
        id: 3,
        title: 'CrossFit',
        subTitle: 'Spending time at the gym',
        icon: BiDumbbell,
      },
      {
        id: 4,
        title: 'Bicycle',
        subTitle: 'I love to ride my bike',
        icon: MdDirectionsBike,
      },
      {
        id: 5,
        title: 'Books',
        subTitle: 'Reading about healthy lifestyle',
        icon: BiBook,
      },
    ],
  },
  {
    id: 2,
    lang: 'polish',
    title: 'Zainteresowania',
    intrest: [
      {
        id: 1,
        title: 'Bieganie',
        subTitle: 'Biegi przełajowe',
        icon: BiRun,
      },
      {
        id: 2,
        title: 'Wycieczki',
        subTitle: 'Wędrówki piesze',
        icon: FaHiking,
      },
      {
        id: 3,
        title: 'CrossFit',
        subTitle: 'Spędzanie czasu na siłowni',
        icon: BiDumbbell,
      },
      {
        id: 4,
        title: 'Rower',
        subTitle: 'Uwielbiam jeździć na rowerze',
        icon: MdDirectionsBike,
      },
      {
        id: 5,
        title: 'Książki',
        subTitle: 'Czytanie o zdrowym stylu życia',
        icon: BiBook,
      },
    ],
  },
];

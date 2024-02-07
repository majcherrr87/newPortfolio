import {
  BiHome,
  BiBook,
  BiReceipt,
  BiBriefcaseAlt,
  BiAward,
} from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { GoProjectSymlink } from 'react-icons/go';

export const navData = [
  {
    id: 1,
    lang: 'ENG',
    item: [
      {
        link: '#home',
        name: 'Home',
        icon: BiHome,
      },
      {
        link: '#profile',
        name: 'Profile',
        icon: AiOutlineUser,
      },
      {
        link: '#education',
        name: 'Education',
        icon: BiBook,
      },
      {
        link: '#skills',
        name: 'Skills',
        icon: BiReceipt,
      },
      {
        link: '#experience',
        name: 'Experience',
        icon: BiBriefcaseAlt,
      },
      {
        link: '#projects',
        name: 'References',
        icon: GoProjectSymlink,
      },
      {
        link: '#certificates',
        name: 'Certificates',
        icon: BiAward,
      },
    ],
  },
  {
    id: 2,
    lang: 'POL',
    item: [
      {
        link: '#home',
        name: 'Home',
        icon: BiHome,
      },
      {
        link: '#profile',
        name: 'Profil',
        icon: AiOutlineUser,
      },
      {
        link: '#education',
        name: 'Edukacja',
        icon: BiBook,
      },
      {
        link: '#skills',
        name: 'Umiejętności',
        icon: BiReceipt,
      },
      {
        link: '#experience',
        name: 'Doświadczenie',
        icon: BiBriefcaseAlt,
      },
      {
        link: '#projects',
        name: 'Projekty',
        icon: GoProjectSymlink,
      },
      {
        link: '#certificates',
        name: 'Certyfikaty',
        icon: BiAward,
      },
    ],
  },
];

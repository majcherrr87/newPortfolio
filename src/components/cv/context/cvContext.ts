import { createContext } from 'react';
import { CvContextType } from '../CvTypes';

export const CvContext = createContext<CvContextType | undefined>(undefined);

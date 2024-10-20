import { useContext } from 'react';
import styled from 'styled-components';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';
import { cvClauseData } from './cvClauseData';

export function CvClause() {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }

  const { language } = context;

  const data = selectLang(cvClauseData, language);

  return <Clause>{data?.text}</Clause>;
}
const Clause = styled.p`
  grid-column: 1 / span 2;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.font.smaller_font_size};
`;

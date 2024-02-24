import styled from 'styled-components';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { CopyrightData } from './copyright-data';

export function Copyright() {
  const { lang } = useMyContext();
  const { txt } = selectLang(CopyrightData, lang);

  const today = new Date();
  const year = today.getFullYear();

  return (
    <Container>
      <h1>
        {txt} &copy; Adrian Majcher {year}
      </h1>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 0.9rem;
    font-weight: normal;
    text-align: center;
    margin: 3rem;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      margin: 1rem;
      font-size: 0.7rem;
    }
  }
`;

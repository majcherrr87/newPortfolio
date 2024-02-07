import styled from 'styled-components';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { CopyrightData } from './copyright-data';

export const Copyright = () => {
  const { lang } = useMyContext();
  const { txt } = selectLang(CopyrightData, lang);

  return (
    <Container>
      <h1>{txt} &copy; Adrian Majcher</h1>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    font-size: 0.9rem;
    font-weight: normal;
    text-align: center;
    margin: 0.5rem;
  }
`;

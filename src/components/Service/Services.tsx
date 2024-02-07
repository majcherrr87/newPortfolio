import styled from 'styled-components';
import Card from './Card';
import { H1Title, Span } from '../../assets/smallComponent';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import serviceData from './service-data';

const Services = () => {
  const { mainColor, lang } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, txtTitleBig, card } = selectLang(
    serviceData,
    lang
  );
  return (
    <Container id="Service">
      <h4>
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </h4>
      <H1Title>{txtTitleBig}</H1Title>
      <Cards>
        {card.map(({ img, title, disc, link, skills }, index) => (
          <Card
            key={index}
            color={mainColor}
            link={link}
            img={img}
            title={title}
            skills={skills}
            disc={disc}
          />
        ))}
      </Cards>
    </Container>
  );
};
export default Services;

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  @media (min-width: ${({ theme }) => theme.size.sm}) and (max-width: 1089px) {
    div:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      p {
        padding: 0 6rem;
      }
    }
  }
`;

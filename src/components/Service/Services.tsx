import { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Card from './Card';
import { H1Title, Span } from '../../assets/smallComponent';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import serviceData, { CardType } from './service-data';

function Services() {
  const { mainColor, lang } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, txtTitleBig, card } = selectLang(
    serviceData,
    lang
  );

  return (
    <Container id="Service">
      <h4 id="service-titleSecond">
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </h4>
      <H1Title id="service-title">{txtTitleBig}</H1Title>
      <Cards id="kot">
        {card.map(({ img, title, disc, link, skills }: CardType) => (
          <Card
            key={nanoid()}
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
}
export default Services;

const Container = styled.section`
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

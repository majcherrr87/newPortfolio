import styled from 'styled-components';
import { MdDesignServices } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import Card from './Card';
import { H1Title, Span } from '../../assets/smallComponent';

const Services = () => {
  return (
    <Container id="service">
      <h4>
        My <Span>services</Span>
      </h4>
      <H1Title>What I Do</H1Title>
      <Cards>
        <Card
          Icon={MdDesignServices}
          title={'ui/ux designer'}
          disc={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit inventore ipsum officiis perspiciatis sit voluptate.`}
        />
        <Card
          Icon={MdDesignServices}
          title={'graphic designer'}
          disc={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit inventore ipsum officiis perspiciatis sit voluptate.`}
        />
        <Card
          Icon={CgWebsite}
          title={'web designer'}
          disc={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit inventore ipsum officiis perspiciatis sit voluptate.`}
        />
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

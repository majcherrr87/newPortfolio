import styled from 'styled-components';
import { MdDesignServices } from 'react-icons/md';
import { FiCodesandBox } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import Card from './Card';

const Services = () => {
  return (
    <Container>
      <h4>
        My <span>services</span>
      </h4>
      <h1>What I Do</h1>
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
  h4 > span {
    color: ${({ theme }) => theme.colors.green};
  }
  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

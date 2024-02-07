import styled from 'styled-components';
import { IoIosQuote } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
import { ClientsDatatype } from './Clients-data';
import { useMyContext } from '../../utils/context/ContextProvider';

const ClientSlider = ({ item }) => {
  const { name, disc, start, position, img_url }: ClientsDatatype = item;
  const { mainColor } = useMyContext();
  return (
    <Container>
      <Header color={mainColor}>
        <span className="quote">
          <IoIosQuote />
        </span>
        <div className="stars">
          {Array(start)
            .fill()
            .map((_, i) => (
              <span className="star" key={i}>
                <AiOutlineStar />
              </span>
            ))}
        </div>
      </Header>
      <Body>{disc}</Body>
      <Footer>
        <img src={img_url} alt={name} />
        <div className="details">
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      </Footer>
    </Container>
  );
};
export default ClientSlider;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem 1rem;
  margin: 0 1rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 3rem;
    color: ${({ color }) => color};
    opacity: 0.7;
  }
  .star {
    color: #ffcd3c;
    font-size: 1.3rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    border-radius: 50px;
  }
  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    @media (max-width: calc(${({ theme }) => theme.size.xs} + 80px)) {
      font-size: 1rem;
    }
    @media (max-width: calc(${({ theme }) => theme.size.xs} + 40px)) {
      font-size: 0.9rem;
    }
  }
  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: calc(${({ theme }) => theme.size.xs} + 40px)) {
      font-size: 0.6rem;
    }
  }
`;

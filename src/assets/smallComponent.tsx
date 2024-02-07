import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ color }) => color};
  font-weight: 700;
  text-transform: capitalize;
`;

export const H1Title = styled.h1`
  padding-top: 1rem;
  text-transform: capitalize;
`;
export const H1Footer = styled.h1`
  font-size: 1.2rem;
  margin-top: 1.2rem;
  margin-bottom: 0.3rem;
`;
export const Title = styled.h1`
  font-size: 1.9rem;
`;
export const Disc = styled.p`
  width: 28rem;
  margin: 0 auto;
  padding: 1rem 0;
  font-size: 0.9rem;
  @media (max-width: calc(${({ theme }) => theme.size.sm} - 140px)) {
    width: 90%;
  }
`;

import { FaRegFilePdf } from 'react-icons/fa6';
import styled from 'styled-components';
import Cv from '../../../assets/pdf/CV-POL_AdrianMajcher.pdf';

export const DownloadFdf = () => {
  return (
    <a href={Cv} download>
      <Icon>{FaRegFilePdf()}</Icon>
    </a>
  );
};

const Icon = styled.span`
  display: none;
  position: absolute;
  top: 2.2rem;
  left: 2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text_color};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.title_color};
  }
  @media screen and (min-width: 968px) {
    display: inline-block;
  }
`;

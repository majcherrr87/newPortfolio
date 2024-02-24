import styled from 'styled-components';
import { useMyContext } from '../../utils/context/ContextProvider';
import { ProjectType } from './project-data';

function Project({ item }: { item: ProjectType }) {
  const { srcImg, disc, title, index }: ProjectType = item;
  const { changeIndexMainProject } = useMyContext();

  return (
    <Container className="project">
      <img src={srcImg} alt="project" />
      <div className="disc">
        <a href="#MainProject" onClick={() => changeIndexMainProject(index)}>
          <h1>{title}</h1>
          <p>{disc}</p>
        </a>
      </div>
    </Container>
  );
}
export default Project;

const Container = styled.div`
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    & {
      height: 15rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    transition: all 400ms ease-in-out;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    a {
      margin-left: 0.8rem;
      color: white;
      text-decoration: none;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 8.5rem;
      display: block;
      h1 {
        font-size: 1rem;
      }
      p {
        width: 90%;
        font-size: 0.8rem;
      }
    }
  }
  :hover > img {
    transform: scale(1.3);
  }
  :hover > .disc {
    bottom: 0;
  }
`;

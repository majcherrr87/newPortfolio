import styled from 'styled-components';
import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { Span, Title } from '../../assets/smallComponent';
import { mainProjectData, DataType } from './mainProject-data';
import { ProjectData, ProjectDataType } from '../Projects/project-data';
import FeaturedProject from './FeaturedProject';

function MainProject() {
  const { mainColor, lang, indexMainProject } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, txtButton }: DataType = selectLang(
    mainProjectData,
    lang
  );

  const { projects }: ProjectDataType = selectLang(ProjectData, lang);
  return (
    <Container id="Project">
      <Title>
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </Title>

      <FeaturedProject
        projects={projects}
        project={0}
        txtButton={txtButton}
        isReversed={false}
      />
      <div id="MainProject">
        <FeaturedProject
          projects={projects}
          project={indexMainProject}
          txtButton={txtButton}
          isReversed
        />
      </div>
    </Container>
  );
}
export default MainProject;

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.size.ld};
  margin: 0 auto;
  padding: 3rem 0;
  h1 {
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  #MainProject {
    padding-top: 1rem;
  }
`;

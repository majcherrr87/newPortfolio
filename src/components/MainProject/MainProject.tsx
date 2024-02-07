import styled from 'styled-components';

import { useMyContext } from '../../utils/context/ContextProvider';
import { selectLang } from '../../utils/changeLang';
import { H1Title, Span, Title } from '../../assets/smallComponent';
import IconMarkGithub16 from '../../assets/svg/github';
import { mainProject_data, dataType } from './mainProject-data';
import { project_data, ProjectDataType } from '../Projects/project-data';
import React, { useState } from 'react';
import FeaturedProject from './FeaturedProject';

function MainProject() {
  const { mainColor, lang, indexMainProject } = useMyContext();
  const { txtTitleFirst, txtTitleSecond, txtButton }: dataType = selectLang(
    mainProject_data,
    lang
  );

  const { projects }: ProjectDataType = selectLang(project_data, lang);
  return (
    <Container id="MainProject">
      <Title>
        {txtTitleFirst} <Span color={mainColor}>{txtTitleSecond}</Span>
      </Title>

      <FeaturedProject
        projects={projects}
        project={0}
        txtButton={txtButton}
        isReversed={false}
      />

      <FeaturedProject
        projects={projects}
        project={1}
        txtButton={txtButton}
        isReversed={true}
      />
    </Container>
  );
}
//TODO: po wybraniu projektu z listy pozostałych projektów tu powinno sie pojawić dodadkowyc component
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
`;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LiaCertificateSolid } from 'react-icons/lia';
import { Content, ContainerSection, Container } from './ProjectsSection';
import { certificatesData } from './certificateData';
import { CvContext } from '../context/cvContext';
import { selectLang } from '../../../utils/changeLang';

export function CertificateSection() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error('LanguageToggle must be used within a LanguageProvider');
  }
  const { language } = context;

  const data = selectLang(certificatesData, language);
  return (
    <ContainerSection id="certificates">
      <h2 className="section-title">{data?.title}</h2>
      <Container>
        {data?.certificate.map(({ name, link }) => (
          <Content key={name}>
            <div>
              <LiaCertificateSolid />
              <h3>
                {name}
                <Link to={link} target="_blank">
                  {' '}
                  {data.subTitle}
                </Link>
              </h3>
            </div>
          </Content>
        ))}
      </Container>
    </ContainerSection>
  );
}

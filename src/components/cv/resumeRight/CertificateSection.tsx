import { LiaCertificateSolid } from 'react-icons/lia';
import { Content, ContainerSection, Container } from './ProjectsSection';

type DataType = {
  name: string;
  link: string;
};

export function CertificateSection() {
  const data: DataType[] = [
    {
      name: 'Kurs programista PHP',
      link: 'https://www.alx.pl/certyfikat/adrian-majcher/9a73e1ffdf7b415eb22e0ac70384827f/',
    },
    {
      name: 'Kurs programowanie w javascript',
      link: 'https://www.udemy.com/certificate/UC-b8482c60-374a-41f7-9c30-205a21f24eba/',
    },
    {
      name: 'Kurs React od podstaw',
      link: 'https://www.udemy.com/certificate/UC-19729b91-bda1-4d71-9487-e64de6c1a84d/',
    },
  ];
  return (
    <ContainerSection id="certificates">
      <h2 className="section-title">Certyfikaty</h2>
      <Container>
        {data.map(({ name, link }) => (
          <Content key={name}>
            <div>
              <LiaCertificateSolid />
              <h3>{name}</h3>
            </div>

            <p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </p>
          </Content>
        ))}
      </Container>
    </ContainerSection>
  );
}

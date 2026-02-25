import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useTranslation } from 'react-i18next';

// Import Amiri font globally
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
`;

// إعداد مكونات الـ Styled Components
const AboutContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  min-height: 100vh;
  font-family: 'Amiri', serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const ContentBox = styled.div`
  background-color: #0F1C2E;
  color: #E8DCC8;
  padding: 40px;
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
  font-family: 'Amiri', serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #C6A75E;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Amiri', serif;
  line-height: 1.6;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Description = styled.p`
  color: #E8DCC8;
  font-size: 18px;
  line-height: 2;
  margin: 0;
  font-family: 'Amiri', serif;
`;

const AboutAthar = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <GlobalStyle />
      <AboutContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <ContentBox>
          <Title>{t('about.title')}</Title>
          <Description>
            {t('about.description')}
          </Description>
        </ContentBox>
      </AboutContainer>
    </>
  );
};

export default AboutAthar;

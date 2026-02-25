import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSwitcherContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  padding: 0 10px;
`;

const LanguageButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#3b1112' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#f1ede1' : '#3b1112')};
  border: 2px solid #3b1112;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-family: '29LT Riwaya', sans-serif;
  font-size: 13px;
  font-weight: bold;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #3b1112;
    color: #f1ede1;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageSwitcherContainer>
      <LanguageButton
        isActive={i18n.language === 'ar'}
        onClick={() => changeLanguage('ar')}
      >
        العربية
      </LanguageButton>
      <LanguageButton
        isActive={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
      >
        English
      </LanguageButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;

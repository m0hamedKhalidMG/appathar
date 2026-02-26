// Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import bgImage from '../images/bg.jpeg';

const ContactContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  background-image: url(${bgImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  color: #0F1C2E;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom: 3px solid #C6A75E;
  padding-bottom: 10px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(15, 28, 46, 0.1);
  border: 2px solid #C6A75E;

  @media (min-width: 1024px) {
    padding: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #C6A75E;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #0F1C2E;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #0F1C2E;
    background-color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #C6A75E;
  font-size: 16px;
  min-height: 150px;
  background-color: #f9f9f9;
  color: #0F1C2E;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #0F1C2E;
    background-color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  background-color: #C6A75E;
  color: #0F1C2E;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background-color: #0F1C2E;
    color: #C6A75E;
    box-shadow: 0 4px 12px rgba(198, 167, 94, 0.3);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(t('contact.success'));
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Title>{t('contact.title')}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder={t('contact.form.name')}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder={t('contact.form.email')}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder={t('contact.form.message')}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">{t('contact.form.submit')}</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import bgImage from '../images/bg.jpeg';
import { useTranslation } from 'react-i18next';

// ============ ANIMATIONS ============

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const parallaxFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// ============ HERO SECTION ============

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgba(15, 28, 46, 0.45) 0%, rgba(15, 28, 46, 0.35) 100%),
              url(${bgImage}) center / cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 80px;
  overflow: visible;
  margin-top: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(198, 167, 94, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding-left: 50px;
    height: 90vh;
  }

  @media (max-width: 768px) {
    height: 80vh;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: center;
    text-align: center;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    height: 70vh;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Georgia', serif;
  letter-spacing: 2px;
  line-height: 1.2;
  text-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 44px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #E8DCC8;
  font-family: 'Georgia', serif;
  line-height: 1.8;
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;



// ============ FEATURE CARDS SECTION ============

const CardsWrapper = styled.div`
  position: absolute;
  top: 60%;
  ${(props) => (props.isArabic ? 'right: 80px; left: auto;' : 'left: 80px; right: auto;')}
  transform: translateY(-50%);
  width: calc(100% - 160px);
  max-width: 1000px;
  padding: 0;
  z-index: 10;
  animation: ${slideUp} 1s ease-out 0.8s both;

  @media (max-width: 1024px) {
    ${(props) => (props.isArabic ? 'right: 50px; left: auto;' : 'left: 50px; right: auto;')}
    width: calc(100% - 100px);
    top: 60%;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 55%;
    ${(props) => (props.isArabic ? 'right: 30px; left: auto;' : 'left: 30px; right: auto;')}
    transform: translateY(-50%);
    width: calc(100% - 60px);
    padding: 0;
  }

  @media (max-width: 480px) {
    top: 50%;
    ${(props) => (props.isArabic ? 'right: 20px; left: auto;' : 'left: 20px; right: auto;')}
    width: calc(100% - 40px);
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  margin-top: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const CardBase = styled.div`
  padding: 32px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  background: ${(props) => props.bgColor || 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  animation: ${slideUp} 1s ease-out;
  animation-delay: ${(props) => props.delay || '0s'};
  animation-fill-mode: both;
  min-width: 0;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px);
    background: ${(props) => props.hoverBg || 'rgba(255, 255, 255, 0.15)'};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Card = styled(CardBase)`
  background: #ffffff;
  border-color: rgba(255, 255, 255, 0.5);
  
  &:hover {
    background: #ffffff;
  }
`;

const DarkCard = styled(CardBase)`
  background: rgba(15, 28, 46, 0.85);
  border-color: rgba(198, 167, 94, 0.3);
  
  &:hover {
    background: rgba(15, 28, 46, 0.95);
    border-color: rgba(198, 167, 94, 0.5);
  }
`;

const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  display: inline-block;
  transition: transform 0.3s ease;
  animation: ${parallaxFloat} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || '0s'};

  ${CardBase}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.textColor || '#0F1C2E'};
  font-family: 'Georgia', serif;
  margin: 16px 0 12px 0;
  letter-spacing: 1px;
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${(props) => props.textColor || '#666666'};
  margin: 0;
  font-family: 'Georgia', serif;
`;

// ============ PADDING SECTION ============






const Home = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <HeroSection>
        <HeroContent>
          <MainHeading>
            {isArabic ? 'استكشف التراث السعودي' : 'Explore Saudi Heritage'}
          </MainHeading>
          <SubHeading>
            {isArabic
              ? 'دليلك الشامل للبقاء والطعام والترفيه في الوجهات التاريخية'
              : 'Your Complete Guide to Stay, Dine, and Play in Historic Destinations'}
          </SubHeading>
         
        </HeroContent>
      </HeroSection>

      <CardsWrapper isArabic={isArabic}>
        <CardsContainer>
          {/* Card 1 - Explore The Sites */}
          <Card delay="0.8s">
            <CardIcon delay="0s">🏛️</CardIcon>
            <CardTitle textColor="#0F1C2E">
              {isArabic ? 'استكشف الآثار' : 'Explore The Sites'}
            </CardTitle>
            <CardDescription textColor="#5A5A5A">
              {isArabic
                ? 'اكتشف المواقع الأثرية والمعالم الثقافية الساحرة في كل مدينة'
                : 'Discover enchanting archaeological sites and cultural landmarks in every destination'}
            </CardDescription>
          </Card>

          {/* Card 2 - Local Experiences */}
          <Card delay="1s">
            <CardIcon delay="0.2s">🌍</CardIcon>
            <CardTitle textColor="#0F1C2E">
              {isArabic ? 'التجارب المحلية' : 'Local Experiences'}
            </CardTitle>
            <CardDescription textColor="#5A5A5A">
              {isArabic
                ? 'استمتع بالتجارب الثقافية الأصيلة والأنشطة الترفيهية المحلية'
                : 'Immerse in authentic cultural experiences and local entertainment activities'}
            </CardDescription>
          </Card>

          {/* Card 3 - Where to Stay (Dark Version) */}
          <DarkCard delay="1.2s">
            <CardIcon delay="0.4s">🏨</CardIcon>
            <CardTitle textColor="#E5D4A8">
              {isArabic ? 'مكان الإقامة' : 'Where to Stay'}
            </CardTitle>
            <CardDescription textColor="#C9C9C9">
              {isArabic
                ? 'ابحث عن أفضل الفنادق والإقامات الفاخرة في المدن التاريخية'
                : 'Find premium hotels and luxury accommodations in historic cities'}
            </CardDescription>
          </DarkCard>
        </CardsContainer>
      </CardsWrapper>


    
    </div>
  );
};

export default Home;

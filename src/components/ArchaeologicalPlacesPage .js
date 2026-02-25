import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import citiesDataBilingual from '../data/citiesDataBilingual';

const Container = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
  direction: ${({ dir }) => dir || 'ltr'};
  margin-top: 70px;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const CitiesSection = styled.section`
  margin-bottom: 60px;
`;

const AttractionsSection = styled.section`
  margin-top: 40px;
  scroll-margin-top: 20px;
`;

const SectionTitle = styled.h2`
  color: #0F1C2E;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 3px solid #C6A75E;
  padding-bottom: 15px;
  display: inline-block;
  width: 100%;
  font-family: '29LT Riwaya', sans-serif;
  letter-spacing: 1px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const CitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const CityCard = styled.div`
  width: 280px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#C6A75E' : 'transparent')};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(15, 28, 46, 0.2);
  }
`;

const CityImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CityTitle = styled.h3`
  padding: 15px;
  margin: 0;
  color: #0F1C2E;
  font-size: 24px;
  text-align: center;
  background-color: #fff;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding: 0 10px;
`;

const Tab = styled.button`
  padding: 12px 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ active }) => (active ? '#0F1C2E' : '#fff')};
  color: ${({ active }) => (active ? '#C6A75E' : '#0F1C2E')};
  border: 2px solid #0F1C2E;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: '29LT Riwaya', sans-serif;
  white-space: nowrap;
  min-width: 120px;

  &:hover {
    background-color: #0F1C2E;
    color: #C6A75E;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
    min-width: 100px;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

const Card = styled.div`
  width: calc(33% - 25px);
  max-width: 350px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: calc(50% - 25px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 280px;
  transition: transform 0.3s ease;
`;

const CardContent = styled.div`
  padding: 20px;
  background-color: ${({ type }) => {
    switch(type) {
      case 'hotel': return '#F5F5F5';
      case 'restaurant': return '#F5F5F5';
      case 'entertainment': return '#F5F5F5';
      default: return '#F5F5F5';
    }
  }};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h4`
  color: #0F1C2E;
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: bold;
  text-align: center;
  word-break: break-word;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  color: #5A5A5A;
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 15px 0;
  text-align: justify;
  word-break: break-word;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  text-align: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0F1C2E;
  font-size: 15px;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-word;
`;

const NoSelectionMessage = styled.div`
  text-align: center;
  color: #0F1C2E;
  font-size: 20px;
  padding: 60px;
  background-color: #fff;
  border-radius: 15px;
  margin-top: 20px;
`;

const BookingButton = styled.button`
  margin-top: 15px;
  padding: 12px 20px;
  background-color: #C6A75E;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #0F1C2E;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
  font-family: '29LT Riwaya', sans-serif;

  &:hover {
    background-color: #B8945A;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(198, 167, 94, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ArchaeologicalPlacesPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState('attractions');
  const attractionsRef = useRef(null);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setActiveTab('attractions');
    
    setTimeout(() => {
      attractionsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const renderContent = () => {
    if (!selectedCity) return null;

    const cityData = citiesDataBilingual[selectedCity];

    switch(activeTab) {
      case 'attractions':
        return cityData.attractions.items.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.image} alt={item[lang].title} />
            <CardContent>
              <CardTitle>{item[lang].title}</CardTitle>
              <CardDescription>{item[lang].description}</CardDescription>
            </CardContent>
          </Card>
        ));
      
      case 'hotels':
        return cityData.hotels.map((hotel, index) => (
          <Card key={index}>
            <CardImage src={hotel.image} alt={hotel[lang].name} />
            <CardContent type="hotel">
              <CardTitle>{hotel[lang].name}</CardTitle>
              <CardDescription>{hotel[lang].description}</CardDescription>
              <CardInfo>
                <InfoItem>📍 {hotel[lang].address}</InfoItem>
                <InfoItem>⭐ {hotel.rating}</InfoItem>
                <InfoItem>📱 {hotel[lang].phone}</InfoItem>
              </CardInfo>
              {hotel.booking && (
                <BookingButton onClick={() => alert(lang === 'ar' ? 'سيتم تفعيل خاصية الحجز قريباً' : 'Booking feature coming soon')}>
                  {lang === 'ar' ? '🔖 احجز الآن' : '🔖 Book Now'}
                </BookingButton>
              )}
            </CardContent>
          </Card>
        ));
      
      case 'restaurants':
        return cityData.restaurants.map((restaurant, index) => (
          <Card key={index}>
            <CardImage src={restaurant.image} alt={restaurant[lang].name} />
            <CardContent type="restaurant">
              <CardTitle>{restaurant[lang].name}</CardTitle>
              <CardDescription>{restaurant[lang].description}</CardDescription>
              <CardInfo>
                <InfoItem>📍 {restaurant[lang].address}</InfoItem>
                <InfoItem>🍽️ {restaurant[lang].cuisine}</InfoItem>
                <InfoItem>🕐 {restaurant[lang].hours}</InfoItem>
                <InfoItem>📱 {restaurant[lang].phone}</InfoItem>
              </CardInfo>
            </CardContent>
          </Card>
        ));

      case 'entertainment':
        return cityData.entertainment ? cityData.entertainment.map((place, index) => (
          <Card key={index}>
            <CardImage src={place.image} alt={place[lang].name} />
            <CardContent type="entertainment">
              <CardTitle>{place[lang].name}</CardTitle>
              <CardDescription>{place[lang].description}</CardDescription>
              <CardInfo>
                <InfoItem>📍 {place[lang].address}</InfoItem>
                <InfoItem>🎭 {place[lang].type}</InfoItem>
                <InfoItem>🕐 {place[lang].hours}</InfoItem>
                <InfoItem>📱 {place[lang].phone}</InfoItem>
              </CardInfo>
            </CardContent>
          </Card>
        )) : [];
      
      default:
        return null;
    }
  };

  return (
    <Container dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <CitiesSection>
       
        <CitiesGrid>
          {Object.keys(citiesDataBilingual).map((city) => (
            <CityCard
              key={city}
              onClick={() => handleCityClick(city)}
              isSelected={selectedCity === city}
            >
              <CityImage
                src={citiesDataBilingual[city].mainImage}
                alt={city}
              />
              <CityTitle>{citiesDataBilingual[city][lang].name}</CityTitle>
            </CityCard>
          ))}
        </CitiesGrid>
      </CitiesSection>

      <AttractionsSection ref={attractionsRef}>
        <SectionTitle>
          {selectedCity ? `${citiesDataBilingual[selectedCity][lang].name}` : (lang === 'ar' ? 'المعالم والخدمات' : 'Attractions & Services')}
        </SectionTitle>
        
        {selectedCity ? (
          <>
            <TabsContainer>
              <Tab 
                active={activeTab === 'attractions'} 
                onClick={() => setActiveTab('attractions')}
              >
                {lang === 'ar' ? '🏛️ المعالم السياحية' : '🏛️ Attractions'}
              </Tab>
              <Tab 
                active={activeTab === 'hotels'} 
                onClick={() => setActiveTab('hotels')}
              >
                {lang === 'ar' ? '🏨 الفنادق' : '🏨 Hotels'}
              </Tab>
              <Tab 
                active={activeTab === 'restaurants'} 
                onClick={() => setActiveTab('restaurants')}
              >
                {lang === 'ar' ? '🍽️ المطاعم' : '🍽️ Restaurants'}
              </Tab>
              {citiesDataBilingual[selectedCity].entertainment && (
                <Tab 
                  active={activeTab === 'entertainment'} 
                  onClick={() => setActiveTab('entertainment')}
                >
                  {lang === 'ar' ? '🎢 الترفيه' : '🎢 Entertainment'}
                </Tab>
              )}
            </TabsContainer>

            <ContentGrid>
              {renderContent()}
            </ContentGrid>
          </>
        ) : (
          <NoSelectionMessage>
            {lang === 'ar' ? 'الرجاء اختيار مدينة من البطاقات أعلاه لعرض المعالم السياحية والفنادق والمطاعم' : 'Please select a city from the cards above to view attractions, hotels, and restaurants'}
          </NoSelectionMessage>
        )}
      </AttractionsSection>
    </Container>
  );
};

export default ArchaeologicalPlacesPage;

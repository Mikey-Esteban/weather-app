import React from "react";

import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #efefef;
  padding: 10px 20px;
  min-width: 140px;

  cursor: pointer;
`;

const CityStateWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  #state {
    margin-left: 5px;
  }
`;

const CountryWrapper = styled.div`
  display flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ cityData, handleClick }) => {
  const img = `https://www.countryflags.io/${cityData.country.toLowerCase()}/flat/24.png`;

  return (
    <MainWrapper onClick={handleClick(cityData.id)}>
      <CityStateWrapper id="cityStateWrapper">
        <div id="name">{cityData.name}</div>
        <div id="state">{cityData.state}</div>
      </CityStateWrapper>
      <CountryWrapper id="countryWrapper">
        <img id="flag" src={img} alt="country flag" />
        <div id="country">{cityData.country}</div>
      </CountryWrapper>
    </MainWrapper>
  );
};

export default Card;

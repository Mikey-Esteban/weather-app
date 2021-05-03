import React, { Fragment } from "react";
import styled from "styled-components";

import Card from "./UI/Card";

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
`;

const Cities = props => {
  return (
    <div>
      {props.citiesData && (
        <Fragment>
          <div id="cityCards">...found {props.citiesData.length} cities</div>
          <CardsWrapper>
            {props.citiesData.map((cityData, i) => {
              return (
                <Card
                  key={i}
                  cityData={cityData}
                  handleClick={props.handleClick}
                />
              );
            })}
          </CardsWrapper>
        </Fragment>
      )}
    </div>
  );
};

export default Cities;

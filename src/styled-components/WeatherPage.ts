import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NoResults = styled.h1`
  text-align: center;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20%;
  text-align: center;

  :hover {
    background-color: #ffffff20;
  }
`;

export const ForecastTemperature = styled.label`
  font-size: 3rem;
  width: 100%;
  sup {
    font-size: 1.5rem;
  }
`;
export const ForecastImageContainer = styled.div`
  min-height: 100px;
`;

export const ForecastDay = styled.label`
  font-size: 1rem;
`;
export const ForecastMinMax = styled.label`
  font-size: 1rem;
`;

// today
export const ForecastTemperatureToday = styled.label`
  font-size: 4rem;
  width: 100%;
  sup {
    font-size: 1.5rem;
  }
`;

export const ForecastDayToday = styled.label`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

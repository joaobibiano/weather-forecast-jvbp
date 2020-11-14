import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NoResults = styled.h1`
  text-align: center;
`;

export const MainContainerToday = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20%;
  text-align: center;

  :hover {
    background-color: #ffffff20;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    padding: 20px;
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
  font-size: 1.3rem;
  padding-top: 10px;
  text-transform: uppercase;
`;

export const ForecastMinMax = styled.label`
  font-size: 1rem;
`;

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

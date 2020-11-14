import React from "react";
import {
  ForecastContainer,
  ForecastDay,
  ForecastTemperature,
} from "src/styled-components/WeatherPage";
import Image from "next/image";
import { IForecast } from "src/types/IForecast";

export const getImageBasedOnCondition = (mainCondition: string) => {
  const CloudImage = "/images/cloud.png";
  const IceImage = "/images/ice.png";
  const SunImage = "/images/sun.png";
  const RainImage = "/images/rain.png";
  const Thunderstorm = "/images/thunderstorm.png";

  const forecastConfiguration = {
    Clouds: {
      path: CloudImage,
      width: 230,
      height: 150,
    },
    Clear: {
      path: SunImage,
      width: 160,
      height: 150,
    },
    Snow: {
      path: IceImage,
      width: 150,
      height: 150,
    },
    Rain: {
      path: RainImage,
      width: 150,
      height: 150,
    },
    Drizzle: {
      path: RainImage,
      width: 150,
      height: 150,
    },
    Thunderstorm: {
      path: Thunderstorm,
      width: 150,
      height: 150,
    },
  };

  return forecastConfiguration[mainCondition] || Thunderstorm;
};

interface IProps {
  info: IForecast["list"][0];
}

export default function ForecastComponent({ info }: IProps) {
  const { path, width, height } = getImageBasedOnCondition(
    info.weather[0].main
  );
  return (
    <ForecastContainer>
      <Image src={path} width={width} height={height} />
      <ForecastTemperature>
        {Math.round(info.main.temp)} <sup>c</sup>
      </ForecastTemperature>
      <ForecastDay>{new Date(info.dt_txt).toDateString()}</ForecastDay>
    </ForecastContainer>
  );
}

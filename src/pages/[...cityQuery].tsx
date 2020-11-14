import React from "react";
import Tabs from "src/components/Tab";
import {
  Container,
  ForecastContainer,
  ForecastDay,
  ForecastTemperature,
  Main,
} from "src/styled-components/WeatherPage";
import { IForecast } from "src/types/IForecast";

import { useLocalStorage } from "src/hooks/useLocalStorage";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchFromOpenWatherMap } from "src/services/openWeatherMap";
import Image from "next/image";

interface IProps {
  forecastPageData?: IForecast;
}

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

export default function Home({ forecastPageData }: IProps) {
  return (
    <Container>
      <Tabs currentCity={forecastPageData?.city} />

      <Main>
        {forecastPageData?.list.map((info) => {
          const { path, width, height } = getImageBasedOnCondition(
            info.weather[0].main
          );
          return (
            <ForecastContainer
              key={`${info.dt_txt}|${forecastPageData.city.id}`}
            >
              <Image src={path} width={width} height={height} />
              <ForecastTemperature>
                {Math.round(info.main.temp)} <sup>c</sup>
              </ForecastTemperature>
              <ForecastDay>{new Date(info.dt_txt).toDateString()}</ForecastDay>
            </ForecastContainer>
          );
        })}
      </Main>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { cityQuery } = context.params;
  const [cityId, localeName] = cityQuery as string[];

  let forecastPageData: IForecast;
  try {
    forecastPageData = await fetchFromOpenWatherMap(localeName, cityId);
  } catch (err) {
    console.error(err);
  }

  console.log("fetc", forecastPageData.city.name);
  return {
    props: {
      forecastPageData,
    },
    revalidate: 3600,
  };
};

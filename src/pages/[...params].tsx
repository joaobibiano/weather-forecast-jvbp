import React from "react";
import Tabs from "src/components/Tab";
import {
  Container,
  ForecastContainer,
  ForecastDay,
  ForecastTemperature,
  Main,
  NoResults,
} from "src/styled-components/WeatherPage";
import { IForecast } from "src/types/IForecast";

import { GetStaticPaths, GetStaticProps } from "next";
import { fetchFromOpenWatherMap } from "src/services/openWeatherMap";
import Image from "next/image";
import { getImageBasedOnCondition } from "src/util";
import { ToastContainer } from "react-toastify";

interface IProps {
  forecastPageData?: IForecast;
}

export default function Home({ forecastPageData }: IProps) {
  const todayInfo = forecastPageData?.list?.[0];
  const todayInfoImage = getImageBasedOnCondition(todayInfo?.weather[0]?.main);

  return (
    <Container>
      <Tabs currentCity={forecastPageData?.city} />

      <Main>
        {todayInfo && (
          <ForecastContainer>
            <Image
              src={todayInfoImage.path}
              width={todayInfoImage.width}
              height={todayInfoImage.height}
            />
            <ForecastTemperature>
              {Math.round(todayInfo.main.temp)} <sup>c</sup>
            </ForecastTemperature>
            <ForecastDay>Today</ForecastDay>
          </ForecastContainer>
        )}
      </Main>

      <Main>
        {!forecastPageData && (
          <NoResults>
            We didn't find any match with your search. Please, try again.
          </NoResults>
        )}

        {forecastPageData?.list.map((info, index) => {
          if (index === 0) return null;

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
      <ToastContainer />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/2267057"],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context.params;
  const [cityId, localeName, coordinates] = params as string[];
  let lat, lon;

  if (coordinates) {
    lat = coordinates.split(",")[0];
    lon = coordinates.split(",")[1];
  }

  let forecastPageData: IForecast = null;
  try {
    forecastPageData = await fetchFromOpenWatherMap(
      localeName,
      cityId,
      lat,
      lon
    );
  } catch {}

  return {
    props: {
      forecastPageData,
    },
    // 4 hours
    revalidate: 14400,
  };
};

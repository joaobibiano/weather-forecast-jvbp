import React, { useEffect } from "react";
import Tabs from "src/components/Tab";
import { Container, Main } from "src/styled-components/WeatherPage";
import { IForecast } from "src/types/IForecast";

import useGeolocation from "src/hooks/useGeoLocation";
import { useRouter } from "next/router";

interface IProps {
  forecastPageData?: IForecast;
}

export default function Home({ forecastPageData }: IProps) {
  const { loading, latitude, longitude, error } = useGeolocation();
  const router = useRouter();

  useEffect(() => {
    if (!loading && latitude && longitude) {
      router.push(`/0/0/${latitude},${longitude}`);
    }

    if (error?.message?.includes("denied")) {
      router.push(`/0/0/38.7259284,-9.137382`);
    }
  }, [loading, latitude, longitude, error]);

  return (
    <Container>
      <Tabs currentCity={forecastPageData?.city} />

      <Main>
        <h2>
          Please, allow us to get your location, to show you the forecast :)
        </h2>
      </Main>
    </Container>
  );
}

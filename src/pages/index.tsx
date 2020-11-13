import React, { useEffect } from "react";
import Tabs from "src/components/Tab";
import { Container, Main } from "src/styled-components/WeatherPage";

export default function Home() {
  useEffect(() => {
    // clientApi("weather?city=Lisbon").then((r) => console.log(r));
    // getWeatherFromApi().then((r) => console.log(r));
  }, []);

  return (
    <Container>
      <Tabs />

      <Main>aasdas</Main>
    </Container>
  );
}

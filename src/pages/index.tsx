import React, { useCallback, useEffect, useState } from "react";
import Tabs from "src/components/Tab";
import { Container, Main } from "src/styled-components/WeatherPage";
import { clientApi } from "src/services/api";
import { IForecast } from "src/types/IForecast";
import ForecastDayComponent from "src/components/ForecastDay";
import { useLocalStorage } from "src/hooks/useLocalStorage";

export default function Home() {
  const [tabs, setTabs] = useLocalStorage("tabs", []);
  const selectedTab = tabs.find((i: IForecast) => i.isSelected);

  return (
    <Container>
      <Tabs setTabs={setTabs} tabs={tabs} />

      <Main>
        {selectedTab?.list.map((info) => (
          <ForecastDayComponent info={info} />
        ))}
      </Main>
    </Container>
  );
}

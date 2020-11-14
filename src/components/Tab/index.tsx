import React, { useCallback, useEffect, useState } from "react";
import {
  TabItem,
  Container,
  AddNew,
  ContainerAddNew,
  ContainerAddImage,
} from "src/styled-components/Tab";
import Image from "next/image";
import { IForecast } from "src/types/IForecast";
import { useRouter } from "next/router";
import { useLocalStorage } from "src/hooks/useLocalStorage";

interface IProps {
  currentCity?: IForecast["city"];
}
export default function Tabs({ currentCity }: IProps) {
  const [cities, setCities] = useLocalStorage("cities", []);
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const exists = cities.some((c) => c.id === currentCity?.id);
    if (!exists && currentCity) {
      setCities((prev) => [...prev, currentCity]);
    }
  }, [cities, setCities]);

  const onClickTab = useCallback((id: number) => {
    router.push(`/${id}`);
  }, []);

  const addItemToTab = useCallback(async () => {
    router.push(`/0/${inputText}`);

    setInputText("");
  }, [inputText, router]);

  return (
    <Container>
      {(cities || []).map((city) => (
        <TabItem
          key={city.id}
          isSelected={currentCity?.id === city?.id}
          onClick={() => onClickTab(city.id)}
        >
          <span>
            {city.name} <sup>{city.country}</sup>
          </span>
        </TabItem>
      ))}

      <ContainerAddNew>
        <AddNew
          placeholder="Type here, a new location ..."
          value={inputText}
          onChange={(ev) => setInputText(ev.target.value)}
          onKeyDown={(ev) => ev.key === "Enter" && addItemToTab()}
        />
        <ContainerAddImage onClick={addItemToTab}>
          {inputText && <Image src="/images/plus.svg" width={25} height={25} />}
        </ContainerAddImage>
      </ContainerAddNew>
    </Container>
  );
}

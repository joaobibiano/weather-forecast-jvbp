import React, { useCallback, useState } from "react";
import {
  TabItem,
  Container,
  AddNew,
  ContainerAddNew,
  ContainerAddImage,
} from "src/styled-components/Tab";
import Image from "next/image";
import { IForecast } from "src/types/IForecast";
import { clientApi } from "src/services/api";

interface IProps {
  tabs: IForecast[];
  setTabs: React.Dispatch<React.SetStateAction<IForecast[]>>;
}

export default function Tabs({ setTabs, tabs = [] }: IProps) {
  const [inputText, setInputText] = useState("");

  const searchForecast = useCallback(async (term: string) => {
    const request = await clientApi.get<IForecast>(`weather?city=${term}`);

    return request.data;
  }, []);

  const onClickTab = useCallback(
    (id: number) => {
      setTabs((prev) =>
        prev.map((t) => ({
          ...t,
          isSelected: t.city.id === id,
        }))
      );
    },
    [setTabs]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") addItemToTab();
  };

  const addItemToTab = useCallback(async () => {
    const data = await searchForecast(inputText);

    if (data) {
      setTabs((prev) => [
        ...prev.map((i) => ({ ...i, isSelected: false })),
        { ...data, isSelected: true },
      ]);
    }

    setInputText("");
  }, [inputText, setTabs]);

  return (
    <Container>
      {tabs.map((tab) => (
        <TabItem
          key={tab.city.id}
          isSelected={tab.isSelected}
          onClick={() => onClickTab(tab.city.id)}
        >
          {tab.city.name} <sup>{tab.city.country}</sup>
        </TabItem>
      ))}

      <ContainerAddNew>
        <AddNew
          placeholder="Type here, a new location ..."
          value={inputText}
          onChange={(ev) => setInputText(ev.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ContainerAddImage onClick={addItemToTab}>
          {inputText && <Image src="/images/plus.svg" width={25} height={25} />}
        </ContainerAddImage>
      </ContainerAddNew>
    </Container>
  );
}

import React, { useCallback, useState } from "react";
import {
  TabItem,
  Container,
  AddNew,
  ContainerAddNew,
  ContainerAddImage,
} from "src/styled-components/Tab";
import Image from "next/image";

const mockTabs = [
  {
    key: "1",
    location: "Lisboa",
    data: {},
  },
  {
    key: "2",
    location: "Berlin",
    data: {},
  },
  {
    key: "3",
    location: "Moskow",
    data: {},
    isSelected: true,
  },
  {
    key: "4",
    location: "Paris",
    data: {},
  },
  {
    key: "5",
    location: "Sao Paulo",
    data: {},
  },
];
export default function Tabs() {
  const [tabs, setTabs] = useState(mockTabs);
  const [inputText, setInputText] = useState("");

  const onClickTab = useCallback((id: string) => {
    setTabs((prev) =>
      prev.map((t) => ({
        ...t,
        isSelected: t.key === id,
      }))
    );
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") addItemToTab();
  };

  const addItemToTab = useCallback(() => {
    setTabs((prev) => [
      ...prev,
      { key: "6", location: inputText, data: {}, isSelected: false },
    ]);
  }, [inputText]);

  return (
    <Container>
      {tabs.map((tab) => (
        <TabItem
          key={tab.key}
          isSelected={tab.isSelected}
          onClick={() => onClickTab(tab.key)}
        >
          {tab.location}
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

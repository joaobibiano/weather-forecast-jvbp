import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  TabItem,
  Container,
  AddNew,
  ContainerAddNew,
  ContainerAddImage,
  CitiesContainer,
  DeleteButton,
  TabItemLabel,
} from "src/styled-components/Tab";
import Image from "next/image";
import { IForecast } from "src/types/IForecast";
import { useRouter } from "next/router";
import { useLocalStorage } from "src/hooks/useLocalStorage";
import { toast, ToastContainer } from "react-toastify";

interface IProps {
  currentCity?: IForecast["city"];
}

const notifyDeleteTab = () =>
  toast.success("Tab removed :)", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  });

const notifyNewLocation = () =>
  toast.success("New location loaded with success :)", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  });

const notifyYouCantDelete = () =>
  toast.warning("You can't delete an active tab... sorry :(", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  });

export default function Tabs({ currentCity }: IProps) {
  const [cities, setCities] = useLocalStorage("cities", []);
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const exists = cities.some((c) => c.id === currentCity?.id);
    if (!exists && currentCity) {
      setCities((prev) => [...prev, currentCity]);
      notifyNewLocation();
    }
  }, [cities, setCities]);

  const onRemoveTab = useCallback(
    (id: number) => {
      if (id === currentCity.id) {
        notifyYouCantDelete();
        return;
      }
      const nextState = cities.filter((c) => c.id !== id);
      router.push(`/${nextState[nextState.length - 1].id}`);
      setCities(nextState);
      notifyDeleteTab();
    },
    [setCities, cities]
  );

  const addItemToTab = useCallback(async () => {
    router.push(`/0/${inputText}`);
    setInputText("");
  }, [inputText, router]);

  return (
    <Container>
      <ToastContainer />
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

      <CitiesContainer>
        {(cities || []).map((city) => (
          <TabItem key={city.id} isSelected={currentCity?.id === city?.id}>
            <Link href={`/${city.id}`} passHref>
              <TabItemLabel>
                {city.name} <sup>{city.country}</sup>
              </TabItemLabel>
            </Link>
            <DeleteButton onClick={() => onRemoveTab(city.id)}>x</DeleteButton>
          </TabItem>
        ))}
      </CitiesContainer>
    </Container>
  );
}

import { ITheme } from "src/types/ITheme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.div`
  background-color: ${({ theme }: ITheme) => theme.colors.secondary};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: ITheme) => theme.colors.white};
  font-family: "Roboto", sans-serif;
`;

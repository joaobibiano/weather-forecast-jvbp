import { ITheme } from "src/types/ITheme";
import styled from "styled-components";

interface ITabItem {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 10%;
  background-color: ${({ theme }: ITheme) => theme.colors.primary};
`;

export const TabItem = styled.div<ITabItem>`
  transition: border 0.2s ease-in;
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;

  :first-child {
    margin-left: 20px;
  }

  color: ${({ theme }: ITheme) => theme.colors.white};
  height: ${({ isSelected }) => (isSelected ? "4vh" : "initial")};
  border-bottom: ${({ isSelected }) => (isSelected ? "3px" : "none")} solid
    ${({ theme }: ITheme) => theme.colors.white};
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "initial")};
`;

export const ContainerAddNew = styled.div`
  position: relative;
  width: 340px;
`;

export const ContainerAddImage = styled.a`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const AddNew = styled.input<ITabItem>`
  background: none;
  padding: 5px;
  height: 4vh;
  min-width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  outline: none !important;

  color: ${({ theme }: ITheme) => theme.colors.white};

  ::placeholder {
    color: ${({ theme }: ITheme) => `${theme.colors.white}60`};
    text-align: center;
  }

  :focus::placeholder {
    color: transparent;
  }

  border-color: transparent;
  border-bottom: 1px solid white;

  font-size: 1rem;
`;

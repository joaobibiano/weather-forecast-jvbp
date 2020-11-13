import { ITheme } from "src/types/ITheme";
import styled from "styled-components";

interface ITabItem {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }: ITheme) => theme.colors.primary};
`;

export const TabItem = styled.a<ITabItem>`
  transition: all 0.1s ease;
  height: 4vh;
  min-width: 150px;
  text-align: center;
  padding-bottom: 10px;
  color: ${({ theme }: ITheme) => theme.colors.white};
  cursor: pointer;
  font-size: 1.5rem;

  border-bottom: ${({ isSelected }) => (isSelected ? "3px" : "none")} solid
    ${({ theme }: ITheme) => theme.colors.white};
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "initial")};

  :first-child {
    margin-left: 20px;
  }
`;

export const ContainerAddNew = styled.div`
  position: relative;
  width: 340px;
`;

export const ContainerAddImage = styled.a`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 5px;
`;

export const AddNew = styled.input<ITabItem>`
  background: none;
  padding: 10px;
  border-radius: 10px;
  height: 4vh;
  min-width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  outline: none !important;

  color: ${({ theme }: ITheme) => theme.colors.white};

  ::placeholder {
    color: ${({ theme }: ITheme) => theme.colors.white};
  }

  border-color: ${({ theme }: ITheme) => theme.colors.white};
  font-size: 1.2rem;
`;

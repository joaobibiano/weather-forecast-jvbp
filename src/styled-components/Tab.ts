import { ITheme } from "src/types/ITheme";
import styled from "styled-components";

interface ITabItem {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }: ITheme) => theme.colors.primary};
  padding: 20px 0 20px 0;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const TabItem = styled.div<ITabItem>`
  position: relative;
  transition: border 0.1s ease-in;
  min-width: 150px;
  text-align: center;
  font-size: 1rem;
  padding: 5px;
  height: 25px;

  :first-child {
    margin-left: 20px;
  }

  color: ${({ theme }: ITheme) => theme.colors.white};
  border-bottom: ${({ isSelected }) => (isSelected ? "3px" : "none")} solid
    ${({ theme }: ITheme) => theme.colors.white};
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "initial")};

  :hover {
    ${DeleteButton} {
      display: inline;
    }
  }
`;

export const TabItemLabel = styled.span`
  cursor: pointer;
`;

export const CitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

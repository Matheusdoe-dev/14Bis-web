import React from "react";
// imgs
import userImg from "../../assets/user.svg";
import homeImg from "../../assets/home.svg";
import buildingImg from "../../assets/building.svg";
import bellImg from "../../assets/bell.svg";
// styles
import { BottomMenuContainer, BottomMenuItem } from "./styles";

interface BottomMenuItemProps {
  img: string;
  label: string;
  path: string;
}

const BottomMenuItems: BottomMenuItemProps[] = [
  { img: homeImg, label: "Inicio", path: "/inicio" },
  { img: bellImg, label: "Notificações", path: "/notificacoes" },
  { img: buildingImg, label: "14 Bis", path: "/quem-somos" },
  { img: userImg, label: "Conta", path: "/perfil" },
];

const BottomMenu = () => {
  return (
    <BottomMenuContainer>
      {BottomMenuItems.map((item) => (
        <BottomMenuItem key={item.label} to={item.path}>
          <img src={item.img} alt={item.label} />
          <p>{item.label}</p>
        </BottomMenuItem>
      ))}
    </BottomMenuContainer>
  );
};

export default BottomMenu;

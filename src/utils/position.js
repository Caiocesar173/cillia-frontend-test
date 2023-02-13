import { sideBarMenuToogle } from "@/constants/MenuConstants";

export const claculateOffset = () => {
  const element = document.getElementById(sideBarMenuToogle);
  const xPosition = element.getBoundingClientRect().x;
  const yPosition = element.getBoundingClientRect().y;
  return { x: xPosition, y: yPosition };
};

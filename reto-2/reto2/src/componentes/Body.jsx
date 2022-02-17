import React from "react";
import ContainerContent from "../container/ContainerContent";
import { BodyStyled } from "../styled/styles";
import Fotter from "./Fotter";

const Body = () => {
  return <BodyStyled>
    <ContainerContent/>
    <Fotter />
  </BodyStyled>;
};

export default Body;

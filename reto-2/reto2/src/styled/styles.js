import styled from "styled-components";

const grayishBlue = "hsl(237, 18%, 59%)";
const softRed = "hsl(345, 95%, 68%)";

const white = "hsl(0, 0%, 100%)";
const darkBlue = "hsl(236, 21%, 26%)";
const veryDarkBlue = "hsl(235, 16%, 14%)";
const veryDarkDarkBlue = "hsl(234, 17%, 12%)";

export const BodyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${veryDarkDarkBlue};
  background-image: url("https://res.cloudinary.com/davidcharif/image/upload/v1644977358/imagesReto2/bg-stars_tv8pql.svg");
  min-width: 475px;
  min-height: 1000px;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  font-family: "Spartan", sans-serif;
  font-weight: 700;
`;

export const Footer = styled.div`
color: hsl(345, 95%, 68%);
  height: 200px;
  position: fixed;
  display: flex;
  background-image: url("https://res.cloudinary.com/davidcharif/image/upload/v1644977358/imagesReto2/pattern-hills_wjomju.svg");
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  width: 100%;
  align-items: center;
    justify-content: center;
  img {
    margin: 15px;
   }
  img:hover{
    filter: invert(64%) sepia(79%) saturate(3834%) hue-rotate(310deg) brightness(101%) contrast(97%);
   }
   
`;
export const Contenedor = styled.div`
  display: flex;

  align-items: center;

  flex-direction: column;
  justify-content: center;
  h3 {
    margin-top: 110px;
    color: ${white};
    font-size: 17px;
    letter-spacing: 5px;
  }
`;

export const ContenedorDatos = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  
`;

export const TimeContainer = styled.div`
  height: 80px;
  width: 100px;
  background-color: ${darkBlue};
  border-radius: 8px;
  text-align: center;
  margin: 10px;

  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px){
    width: 90px;
    height: 80px;
    font-size: 40px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${softRed};
  p {
    font-size: 14px;
    color: ${grayishBlue};
  }
`;

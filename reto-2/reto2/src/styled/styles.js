import styled from 'styled-components'

const grayishBlue = 'hsl(237, 18%, 59%)'
const softRed = 'hsl(345, 95%, 68%)'

const white = 'hsl(0, 0%, 100%)'
const darkBlue = 'hsl(236, 21%, 26%)' 
const veryDarkBlue = 'hsl(235, 16%, 14%)'
const veryDarkDarkBlue = 'hsl(234, 17%, 12%)'

export const BodyStyled = styled.div`
background-color:  ${veryDarkDarkBlue};
background-image: url('https://res.cloudinary.com/davidcharif/image/upload/v1644977358/imagesReto2/bg-stars_tv8pql.svg');
height: 500px;
font-family: 'Spartan', sans-serif;
  font-weight: 700;

`

export const Footer = styled.div`
  height: 200px;
  position: fixed;
  background-image: url('https://res.cloudinary.com/davidcharif/image/upload/v1644977358/imagesReto2/pattern-hills_wjomju.svg');
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  min-width: 100%;

`
export const Contenedor = styled.div`
  display: flex;

  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  h3{
    color: white;
    font-size: 14px;
  }
`

export const ContenedorDatos = styled.div`
margin-top: 100px;
  display: flex;
  flex-direction: row;

`

export const TimeContainer = styled.div`
  height: 80px;
  width: 100px;
  background-color: ${darkBlue};
  border-radius: 8px;
  text-align: center;
  margin: 10px;
`

export const Flex = styled.div`
  display: flex;
 flex-direction: column;
 align-items: center;
 color: ${softRed};
`
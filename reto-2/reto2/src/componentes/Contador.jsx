import React from 'react'
import { ContenedorDatos, Flex, TimeContainer } from '../styled/styles'

const Contador = () => {
  return (
    <ContenedorDatos>
      <Flex><TimeContainer/><p>  DAYS</p></Flex>
      <Flex><TimeContainer/><p>HOURS</p></Flex>
      <Flex><TimeContainer/><p>MINUTES</p></Flex>
      <Flex><TimeContainer/><p>SECONDS</p></Flex>
    </ContenedorDatos>
  )
}

export default Contador
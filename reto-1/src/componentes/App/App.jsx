import React from 'react'
import { bodyStyled as Body} from '../../styles/style'

import Header from '../Header/Header'
import ContainerCards from '../../container/ContainerCards/ContainerCards'
const App = () => {
  return (
    <Body>
      <Header/>
      <ContainerCards/>
    </Body>
    
  )
}

export default App
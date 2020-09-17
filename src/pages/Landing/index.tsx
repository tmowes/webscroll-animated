import React from 'react'
import FirstAndSecond from './FirstAndSecond'

import {
  Main,
  TopSection,
  MiddleSection,
  BottomSection,
  ThirdSticky,
  FourthSticky,
} from './styles'

const Landing: React.FC = () => {
  return (
    <Main>
      <TopSection>
        <FirstAndSecond />
      </TopSection>
      <MiddleSection>
        <ThirdSticky />
      </MiddleSection>
      <BottomSection>
        <FourthSticky />
      </BottomSection>
    </Main>
  )
}

export default Landing

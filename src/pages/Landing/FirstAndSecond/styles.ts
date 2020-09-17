import styled from 'styled-components'
import { motion } from 'framer-motion'
import { baseSticky } from '../styles'

export const SecondSticky = styled.div`
  ${baseSticky}
  background: green;
`

export const AnimatedDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  border-radius: 4px;
  border: 4px solid #ffffff;
`

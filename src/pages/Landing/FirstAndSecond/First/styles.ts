import styled from 'styled-components'
import { motion } from 'framer-motion'
import { baseSticky } from '../../styles'

export const FirstSticky = styled(motion.div)`
  ${baseSticky}
  background: red;
  overflow: hidden;
`
export const LeftSide = styled(motion.div)`
  width: 50%;
  height: 100%;
  background: #7dbd91;
`
export const RightSide = styled.div`
  width: 50%;
  height: 100%;
  background: black;
`

export const RightImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #7dbd91;
`

export const A = styled.div`
  background: #f5f1ea;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

export const B = styled.div`
  width: 100%;
  height: 100%;
  background: #582534;
`

export const C = styled.div`
  width: 100%;
  height: 100%;
  background: #0a7397;
`

export const Offset = styled(motion.div)`
  width: 100%;
  height: 100%;
`

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  width: 100%;
  height: 80px;
  background: rgba(255, 127, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 9999;
`

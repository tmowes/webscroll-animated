import React from 'react'
import { useTransform, useViewportScroll } from 'framer-motion'
import {
  FirstSticky,
  LeftSide,
  A,
  B,
  C,
  RightSide,
  RightImage,
  Offset,
} from './styles'

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1],
  )
  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0],
  )
  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh'],
  )
  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511],
  )
  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ['58vh', '0vh'],
  )
  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%'],
  )

  return (
    <FirstSticky style={{ scale: firstScale, borderRadius: firstRadius }}>
      <Offset style={{ y: offsetY }}>
        <A>
          <LeftSide style={{ height: leftSideHeight }} />
          <RightSide>
            <RightImage style={{ y: rightSideY, scale: rightSideScale }} />
          </RightSide>
        </A>
        <B />
        <C />
      </Offset>
    </FirstSticky>
  )
}

export default First

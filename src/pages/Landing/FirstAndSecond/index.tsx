import React from 'react'
import { useTransform, useViewportScroll } from 'framer-motion'
import { AnimatedDiv, SecondSticky } from './styles'
import First from './First'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])
  return (
    <SecondSticky>
      <First />
      <AnimatedDiv style={{ opacity: frameOpacity, scale: frameScale }} />
    </SecondSticky>
  )
}

export default FirstAndSecond

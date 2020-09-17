import styled, { css } from 'styled-components'

export const Container = styled.div``
export const Main = styled.div`
  height: 1610vh;
  background: black;
`

const baseSection = css`
  position: relative;
`

export const TopSection = styled.div`
  height: 72.7%;
  ${baseSection}
`
export const MiddleSection = styled.div`
  height: 9.7%;
  ${baseSection}
`
export const BottomSection = styled.div`
  height: 10.1%;
  ${baseSection}
`

export const baseSticky = css`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`

export const FirstSticky = styled.div`
  ${baseSticky}
  background: red;
  overflow: hidden;
`
export const SecondSticky = styled.div`
  ${baseSticky}
  background: green;
`
export const ThirdSticky = styled.div`
  ${baseSticky}
  background: yellow;
`
export const FourthSticky = styled.div`
  ${baseSticky}
  background: blue;
`
/*
background: #f5f1ea
background: #582534
background: #0a7397


*/

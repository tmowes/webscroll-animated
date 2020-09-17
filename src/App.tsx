import React from 'react'
import Header from './components/Header'
import Landing from './pages/Landing'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <GlobalStyles />
    </>
  )
}

export default App

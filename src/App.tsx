import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Flex } from '@chakra-ui/react'
import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router/>
  )
}

export default App

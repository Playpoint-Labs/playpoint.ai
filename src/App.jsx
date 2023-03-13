import React from 'react'
import { LazyMotion, domAnimation } from "framer-motion"

import Navbar from './components/Navbar'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar/>
    </LazyMotion>
  )
}

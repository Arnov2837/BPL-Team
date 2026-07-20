import { useState } from 'react'
import Nav from './Component/Navbar/Nav'
import './App.css'
import Hero from './Component/Home/Hero'
import Playar from './Component/Home/Playar'
import { Suspense } from 'react'

const fatchPlayre = async()=> {
  const res = await fetch("/Plaredata.json");
  return res.json();
}

function App() {
  const PlayerPromis = fatchPlayre();

  return (
    <>
    <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback ="coming....">
        <Playar PlayerPromis={PlayerPromis} ></Playar>
      </Suspense>

      
    </>
  )
}

export default App

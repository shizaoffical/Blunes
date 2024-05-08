import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom'
import Layout from "../src/GeneralFile/Layout"
import Home from "../src/Pages/Home"
import TwoColumns from './Pages/work/TwoColumns';
import ThreeColumns from './Pages/work/ThreeColumns';
import Clean from './Pages/work/Clean';
import Contact from './Pages/Contact';
import Project1 from './Pages/Project/Project1';
import Project2 from './Pages/Project/Project2';
import Project3 from './Pages/Project/Project3';
import JournelSingle from './Pages/Journel/JournelSingle';
import Journel from './Pages/Journel/Journel';
import Studio from './Pages/Studio';

function AnimatedPath() {
  return (
    <>
      <AnimatePresence >
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/2-columns" element={<TwoColumns/>} />
            <Route path="/3-columns" element={<ThreeColumns/>} />
            <Route path="/clean" element={<Clean/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/project-1" element={<Project1/>} />
            <Route path="/project-2" element={<Project2/>} />
            <Route path="/project-3" element={<Project3/>} />
            <Route path="/journel" element={<Journel/>} />
            <Route path="/journel-single" element={<JournelSingle/>} />
            <Route path="/studio" element={<Studio/>} />

          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedPath
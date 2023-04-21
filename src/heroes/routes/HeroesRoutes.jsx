import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, Search } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/marvel" element={<MarvelPage/>}/>
          <Route path="/dc" element={<DcPage/>}/>
          <Route path="/search" element={<Search/>}/>
          {/* Ruta para la página de detalles de héroe */}
          <Route path="/hero/:id" element={<HeroPage/>}/>
          {/* Redireccionar la ruta raíz a la página de Marvel */}
          <Route path="/" element={<Navigate to="/marvel"/>}/>
        </Routes>
      </div>
    </>
  )
}

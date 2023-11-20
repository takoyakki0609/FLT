import Detail from "pages/Detail"
import Home from "pages/Home"
import { useState } from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

export default function Router() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Navigate replace to="/" />}/>
      </Routes>
    </BrowserRouter>
  )
}

import Join from "components/Join"
import Login from "components/common/Login"
import Profile from "components/common/Profile"
import Detail from "pages/Detail"
import Home from "pages/Home"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

export default function Router() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Navigate replace to="/" />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

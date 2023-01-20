import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import Depositar from "./Depositar.jsx"

export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/depositar" element={<Depositar/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

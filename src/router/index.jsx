import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoPage, ComprasPage, PresentacionPage, IngresarCuentaPage, CrearCuentaPage, } from "../pages";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/compras" element={<ComprasPage />} />
                <Route path="/carrito" element={<CarritoPage />} />
                <Route path="/" element={<PresentacionPage />} />
                <Route path="/ingresarcuenta" element={<IngresarCuentaPage />} />
                <Route path="/crearcuenta" element={<CrearCuentaPage />} />
            </Routes>
        </BrowserRouter>
    )
}
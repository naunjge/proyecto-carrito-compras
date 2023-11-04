import { Badge } from "@mui/material"
import { Link } from "react-router-dom"
import logo1 from "../../assets/logo1.png"
import { ShoppingCart } from "@mui/icons-material"

export default function Carrito() {
    return (
        <>
            <nav className="bg-cyan-500 h-[10vh] flex justify-between">
                <div className="flex items-center gap-3">
                    <img className="ml-3" src={logo1} alt="" />
                    <span className="font-bold text-xl">Ricardo</span>
                    <Link to="/"><span className="ml-16 text-xl">Presentación</span></Link>
                    <Link to="/compras"><span className="ml-6 text-xl">Compras</span></Link>
                </div>
                <div className="mr-14 mt-3">
                    <Link to="/carrito">
                        <Badge badgeContent={4} color="warning">
                            <ShoppingCart color="action" />
                        </Badge>
                    </Link>
                </div>
            </nav>
            <table className="mx-12">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Eliminar</td>
                </tbody>
            </table>
            <div className="mx-12">
                <button className="bg-blue-500  px-6 py-2 text-white rounded">COMPRAR</button>
            </div>
        </>
    )
}
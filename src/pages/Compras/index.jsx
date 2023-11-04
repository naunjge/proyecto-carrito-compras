import { Badge } from "@mui/material"
import Card from "../../components/Card"
import { Link } from "react-router-dom"
import logo1 from "../../assets/logo1.png"
import { ShoppingCart } from "@mui/icons-material"
import { useEffect, useState } from "react"

export default function Compras() {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <>
            <nav className="bg-cyan-500 h-[10vh] flex justify-between">
                <div className="flex items-center gap-3">
                    <img className="ml-3" src={logo1} alt="" />
                    <span className="font-bold text-xl">Ricardo</span>
                    <Link to="/"><span className="ml-16 text-xl">Presentación</span></Link>
                    <Link to="/carrito"><span className="ml-6 text-xl">Carrito</span></Link>
                </div>
                <div className="mr-14 mt-3">
                    <Link to="/carrito">
                        <Badge badgeContent={4} color="warning">
                            <ShoppingCart color="action" />
                        </Badge>
                    </Link>
                </div>
            </nav>
            <h1 className="text-center py-6 text-2xl font-bold">Compras:</h1>
            {productos.map((producto) => (
                <Card
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                >
                </Card>
            ))}
        </>
    )
}
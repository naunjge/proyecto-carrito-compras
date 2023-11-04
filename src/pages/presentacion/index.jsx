import facebook from "../../assets/facebook.png"
import fondo from "../../assets/fondo.jpeg"
import instagram from "../../assets/instagram.png"
import mensaje from "../../assets/mensaje.png"
import phone from "../../assets/phone.png"
import { Link } from "react-router-dom"
import logo1 from "../../assets/logo1.png"
import twitter from "../../assets/twitter.png"

export default function Presentacion() {
    return (
        <>
            <nav className="bg-cyan-500 h-[10vh] flex justify-between">
                <div className="flex items-center gap-3">
                    <img className="ml-3" src={logo1} alt="" />
                    <span className="font-bold text-xl">Ricardo</span>
                </div>
                <div className="flex items-center gap-8 mr-5">
                    <Link to="/ingresarcuenta">
                        <button className="bg-green-400 text-white px-8 py-2 rounded-lg border" type="button">Iniciar Sesión</button>
                    </Link>
                    <Link to="/crearcuenta">
                        <button className="bg-orange-300 text-white px-8 py-2 rounded-lg border" type="button">Registrarse</button>
                    </Link>
                </div>
            </nav>
            <div className="flex justify-between h-[78vh] bg-gray-100">
                <div className="ml-2 my-auto">
                    <h1 className="text-6xl font-semibold">Bienvenido a Ricardo, la tienda de moda y accesorios</h1>
                    <p className="text-2xl mt-4">¡Busca por material, tamaño, color y más!</p>
                    <div className="mt-3">
                        <input className="bg-white w-80 px-6 py-3 border rounded-md outline-none" type="text" placeholder="Que estas buscando?" />
                        <button className="bg-blue-500 ml-2 px-4 py-3 border text-white rounded-md">Buscar</button>
                    </div>
                </div>
                <img className="" src={fondo} alt="" />
            </div>
            <hr />
            <footer className="h-[12vh] flex items-end bg-gray-50">
                <div className="ml-3">
                    <div className="flex gap-1 mb-3">
                        <img src={logo1} alt="" />
                        <span>Ricardo</span>
                    </div>
                    <div className="flex gap-5 ml-">
                        <img className="" src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div className="ml-auto mr-3">
                    <div className="flex gap-2">
                        <img src={phone} alt="" />
                        <span>(+123) 000 131 537</span>
                    </div>
                    <div className="flex gap-2">
                        <img src={mensaje} alt="" />
                        <span>info@ricardo.com</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
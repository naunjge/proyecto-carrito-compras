import { Link } from "react-router-dom"
import logo1 from "../../assets/logo1.png"

export default function CrearCuenta() {
    return (
        <>
            <nav className="bg-cyan-500 h-[10vh] flex justify-between shadow-2xl">
                <div className="flex items-center gap-3">
                    <img className="ml-3" src={logo1} alt="" />
                    <span className="font-bold text-xl">Ricardo</span>
                    <Link to="/"><span className="ml-16 text-xl">Presentación</span></Link>
                </div>
            </nav>
            <main className="bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-30% to-orange-300 to-90%  h-[90vh] grid place-content-center" >
                <div className="bg-gray-300 h-[80vh] grid place-content-center w-[35vw] rounded-lg">
                    <h1 className="font-bold text-2xl text-orange-500">Crear Cuenta</h1>
                    <form action="" className="mt-5 flex flex-col gap-7">
                        <div >
                            <p className="text-orange-500 font-semibold">Nombres y Apellido</p>
                            <input
                                type="text"
                                placeholder="Nombres Completos"
                                className="py-2 px-5 mt-3 rounded outline-none w-[350px]" required />
                        </div>
                        <div >
                            <p className="text-orange-500 font-semibold">Email</p>
                            <input
                                type="email"
                                placeholder="Correo"
                                className="py-2 px-5 mt-3 rounded outline-none w-[350px]" required />
                        </div>
                        <div>
                            <p className="text-orange-500 font-semibold">Contraseña</p>
                            <input
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                className="py-2 px-5 mt-3 rounded outline-none w-[350px]" required />
                        </div>
                        <button className="bg-orange-500 text-white p-2 rounded mt-5 w-[350px]">Crear</button>
                    </form>
                </div>
            </main>

        </>
    )
}
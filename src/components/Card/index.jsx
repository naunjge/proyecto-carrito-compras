import { useState } from "react"

export default function Card({ imagen, titulo, descripcion, precio }) {
    const [added, setAdded] = useState(false)
    return (
        <div className="flex border rounded p-[10px] mb-[30px] ml-10 mr-10 bg-gray-100  shadow-lg">
            <img src={imagen} alt={titulo} className="w-[100px] h-[100px] rounded mr-[10px]" />
            <div className="ml-3">
                <h3 className="m-0 font-bold text-blue-600">{titulo}</h3>
                <p className="m-0 mb-[10px] mt-2">{descripcion}</p>
                <p className="m-0 font-bold">{precio}</p>
                {added
                    ? <button
                        type="button"
                        className="bg-red-700 text-white rounded py-[5px] px-[10px] cursor-pointer"
                    >
                        Quitar del carrito
                    </button>
                    : <button
                        type="button"
                        className="bg-green-700 text-white rounded py-[5px] px-[10px] cursor-pointer"
                    >
                        Agregar al carrito
                    </button>
                }
            </div>
        </div>
    )
}
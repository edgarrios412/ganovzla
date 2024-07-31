import { useParams } from "react-router-dom"
import { tiendas } from "@/DB";
import { CarritoContext } from "@/components/context/CarritoContext";
import { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { precioDolar } from "@/utils/helpers/precioDolar";
import { Timer } from "lucide-react";

const Busqueda = () => {
    const { busqueda } = useParams()

    const { carrito, setCarrito, agregarCarrito, quitarDelCarrito } = useContext(CarritoContext)

    return (
        <>
            <div className="px-5 sm:px-20 lg:px-20 text-start flex flex-col pt-20 py-0 lg:py-32 lg:flex-row min-h-[100vh]">
                <div className="flex flex-col gap-10">
                {tiendas.map(tienda => <div>
                    <div className="flex items-center">
                        <div className="rounded-lg my-4 w-16 h-16 overflow-hidden">
                            <img src={tienda.imagen} alt="Imagen" className="object-cover h-full" />
                        </div>
                        <div>
                            <p className="ml-4 text-lg font-bold">{tienda.nombre}</p>
                            <p className="ml-4 text-sm text-gray-600 font-normal flex"><Timer className="w-4 h-4 text-slate-500 mr-1" /> Entrega estimada {tienda.estimado} min</p>
                        </div>
                    </div>
                    <div>
                    <div className="grid justify-center grid-cols-2 min-[440px]:grid-cols-2 items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                            {!tienda?.productos?.length && <h3 className="text-base text-gray-400 w-full">Este negocio aún no tiene productos</h3>}
                            {tienda?.productos?.map(p =>
                                <div className="flex-col items-center max-w-40 lg:w-96 rounded-lg shadow-md bg-white dark:bg-[#262635] shadow-slate-200 dark:shadow-gray-900 pb-4">
                                    <div className="rounded-lg w-20 h-20 overflow-hidden m-auto">
                                        <img src={p.imagen} alt="Imagen" className="object-cover h-full m-auto" />
                                    </div>
                                    <div className="text-left px-6">
                                        <h2 className="font-bold text-base my-1">${p.precio} <span className="text-sm text-gray-600 font-normal"> ≈ {Math.ceil(p.precio * precioDolar)} bs</span></h2>
                                        {/* <p className="text-slate-500 mb-2">El mejor pollo de la ciudad</p> */}
                                        <div className="flex">
                                            {/* <Timer className="w-4 h-4 text-slate-500 mr-1" /> */}
                                            <p className="text-sm mb-1">{p.nombre}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Button className="h-5 w-3" onClick={() => quitarDelCarrito({ productoId: p.id, tiendaId: tienda.id })}>-</Button>
                                            <p className="font-bold">{carrito.find(c => c.tiendaId == tienda.id && c.productoId == p.id)?.cantidad ?? 0}</p>
                                            <Button className="h-5 w-3" onClick={() => agregarCarrito({ productoId: p.id, tiendaId: tienda.id, cantidad: 1, imagen: p.imagen, precio: p.precio, nombre: p.nombre })}>+</Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>)}
                </div>
            </div>
        </>
    )
}

export default Busqueda
"use client";
import { Icon } from '@iconify/react';


export default function Footer(){
    return(
            <footer className="mx-auto max-w-5xl px-6 py-36 md:max-w-7xl">
                <div className="flex w-full flex-col gap-8 sm:flex-row">
                    <div className="flex w-full flex-row sm:w-1/3 sm:flex-col">

                        <div className="flex w-full flex-col gap-8 sm:mb-8">
                            <p className='font-bold text-sm'>Nuestras redes</p>
                        </div>
                        <div className="flex w-full gap-4">
                            <a href="" className="outline-none transition duration-150 ease-in-out 0 focus-visible:ring-slate-400 rounded-full">
                            <Icon icon="akar-icons:facebook-fill" width="24" height="24" />                           
                            </a>
                            
                            <a href="" className="outline-none transition duration-150 ease-in-out 0 focus-visible:ring-slate-400 rounded-full">
                            <Icon icon="bi:instagram" width="24" height="24" />                           
                            </a>
                            <a href="" className="outline-none transition duration-150 ease-in-out 0 focus-visible:ring-slate-400 rounded-full">
                            <Icon icon="simple-icons:whatsapp" width="24" height="24" />                           
                            </a>
                        </div>
                    </div>


                    <div className="grid w-full grid-cols-2 gap-20 sm:w-full lg:grid-cols-4">
                        <div className='flex flex-col gap-4'>
                            <p className='mb-2 ml-1.5 text-sm dark:text-white font-semibold'>Contacto</p>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Libertad 494</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Miramar, Córdoba, Argentina</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>rafaeldona3d@gmail.com</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>+54 3563 411515</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-2 ml-1.5 text-sm dark:text-white font-semibold'>Menu</p>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Home</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Servicio</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Materiales</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Galeria</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Contacto</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-2 ml-1.5 text-sm dark:text-white font-semibold'>Servicios</p>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Prototipado</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Impresión 3D Online</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Diseño 3D</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Post-Procesado</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-2 ml-1.5 text-sm dark:text-white font-semibold'>Dona 3D</p>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Impresion 3D</a>
                            <a href="" className='text-sm font-medium dark:text-zinc-400'>Servicio de Impresión</a>
               
                        </div>
                    </div>
                </div>
            </footer>
    )
}
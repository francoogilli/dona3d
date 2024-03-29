import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Hero(){
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-10 lg:flex-row relative overflow-hidden w-full justify-between items-center pt-10 sm:pt-20  md:h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
          <div className="flex relative z-20 flex-col gap-6 w-full lg:w-2/3 xl:mt-10">
            <div className="text-center leading-8 md:leading-10 md:text-left">
              <div className="inline-block">
                <h1 className=" tracking-tight inline font-bold text-[2.5rem] lg:text-[3.7rem]">
                  Hace  
                  <span className="inline font-bold from-[#717dfe] to-[#3d2fff] text-[2.5rem] lg:text-[3.7rem] bg-clip-text text-transparent bg-gradient-to-b"> realidad </span>
                  tus ideas con impresión 3D
                </h1>
              </div>
            </div>
            <h2 className="w-full md:w-5/6 my-2 text-neutral-800 dark:text-neutral-400 text-lg lg:text-xl font-normal text-default-500 block max-w-full  text-center md:text-left">
            Brindamos servicios de impresión de alta calidad para transformar en realidad sus proyectos y diseños.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start text-base items-center gap-4">
              <a href="/contact" className="flex justify-center items-center font-semibold text-white from-[#6e7afd] to-[#4236f6] bg-gradient-to-bl rounded-full px-6 py-3 w-48 sm:w-auto">
                Contactar
                <Icon icon="mingcute:right-fill" className="ml-2" />
              </a>
              <a href="/gallery" className="flex justify-center items-center hover:bg-neutral-200 dark:text-white dark:hover:bg-[#212328] text-black font-semibold rounded-full px-6 py-3 w-48 sm:w-auto">
                Ver productos
                <Icon icon="mingcute:right-fill" className="ml-2" />
              </a>
            </div>
          </div>
          <div className="relative grid grid-cols-1 gap-2 sm:gap-6 border rounded-3xl border-none order-first lg:order-none">
            <div className="" style={{ animation: "levitate 16s ease infinite", position: "relative" }}>
              <Image src="/octogonlight3.webp" draggable={false} className="hidden select-none dark:block drop-shadow-2xl w-[170px] sm:w-[190px] md:w-[250px] lg:w-[400px]" priority alt="Icosaedro" width={400} height={400} />
              <Image src="/octogondark.webp" draggable={false} className="block select-none dark:hidden drop-shadow-2xl w-[170px] sm:w-[190px] md:w-[250px] lg:w-[400px]" priority alt="Icosaedro" width={400} height={400} />
            </div>
          </div>

        </div>
      </section>
    )
}
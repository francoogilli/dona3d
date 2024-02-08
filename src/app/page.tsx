"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
            <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-16 lg:flex-row relative overflow-hidden w-full justify-between items-center pt-10 sm:pt-20  md:h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
          <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
            <div className="text-center leading-8 md:leading-10 md:text-left">
              <div className="inline-block">
                <h1 className=" tracking-tight inline font-bold text-[2.5rem] lg:text-[3.35rem]">
                  Hace  
                  <span className="tracking-tight inline font-bold from-[#717dfe] to-[#3d2fff] text-[2.5rem] lg:text-[3.25rem] bg-clip-text text-transparent bg-gradient-to-b"> realidad </span>
                  tus ideas con impresión 3D
                </h1>
              </div>
            </div>
            <h2 className="w-full md:w-5/6 my-2 text-neutral-400 text-lg lg:text-xl font-normal text-default-500 block max-w-full  text-center md:text-left">
            Brindamos servicios de impresión de alta calidad para transformar sus deseos en realidad.
            </h2>
            <div className="flex flex-row justify-center md:justify-start text-base items-center gap-4">
              <a href="" className="flex items-center font-medium text-white from-[#6e7afd] to-[#4236f6] bg-gradient-to-bl rounded-full px-6 py-3">
                Contactar
                <Icon icon="gravity-ui:arrow-right" className="ml-2" />
              </a>
              <a href="/gallery" className="flex items-center dark:text-white text-black font-medium border-2 border-zinc-600 rounded-full px-6 py-3">
                <Icon icon="heroicons:rectangle-group-20-solid" className="mr-2" />
                Productos
              </a>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-2 sm:gap-6 border rounded-3xl border-none order-first lg:order-none">
            <div className="top-[60px] sm:top-[100px]" style={{ gridArea: "1 / 1 / 2 / 2", animation: "levitate 16s ease infinite", position: "relative" }}>
              <Image src="/espherelight.png" className="hidden dark:block drop-shadow-2xl sm:w-[140px] lg:w-[240px] " alt="printer" width={130} height={130} />
              <Image src="/espheredark.png" className="block dark:hidden drop-shadow-2xl sm:w-[140px] lg:w-[240px]" alt="printer" width={130} height={130} />
            </div>
            <div style={{ gridArea: "2 / 2 / 3 / 3", animation: "levitate 12s ease 1s infinite" }}>
              <Image src="/rectlight.png" className="hidden dark:block drop-shadow-2xl sm:w-[140px] lg:w-[240px]" alt="printer" width={130} height={130} />
              <Image src="/rectdark.png" className="block dark:hidden drop-shadow-2xl sm:w-[140px] lg:w-[240px]" alt="printer" width={130} height={130} />
            </div>
            <div style={{ gridArea: "1 / 2 / 3 / 3", animation: "levitate 14s ease 1s infinite", marginTop: "-20px" }}>
              <Image src="/octogonlight.png" className="hidden dark:block drop-shadow-2xl sm:w-[140px] lg:w-[240px]" alt="printer" width={130} height={130} />
              <Image src="/octogondark.png" className="block dark:hidden drop-shadow-2xl sm:w-[140px] lg:w-[240px]" alt="printer" width={130} height={130} />
            </div>
    </div>

        </div>
      </section>
    </>
  );
}
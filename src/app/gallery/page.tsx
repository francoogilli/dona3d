import Image from "next/image";
import Printer from "src/components/visual/printer";

export default function Gallery() {
  
  

    return (
      <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 px-6 pb-16 pt-64 text-center text-black dark:text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="flex max-h-full max-w-full items-center justify-center text-zinc-800 dark:text-zinc-400">
                            <Printer />
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-[400px] sm:h-[340px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-8 mb-4 text-3xl font-bold uppercase tracking-widest">Dona 3D</h1>
            <p className="max-w-[40ch] text-black/85 dark:text-white/75 sm:max-w-[32ch]">Explore nuestra galería de impresiones 3D y descubra la variedad de modelos y diseños que hemos creado.</p>
            <a href="" className="pointer z-10 mt-6 text-white rounded-lg border border-white bg-black dark:bg-white px-3 py-2 text-sm font-semibold dark:text-black transition  md:mt-4">Contactar</a>
          </div>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
          <a href="" className="after:content group relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
            <Image src="/wa.png" className="rounded-lg" alt="hola" width={500} height={500}/>
          </a>
        </div>
      </>
    );
  }


 
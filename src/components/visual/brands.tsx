import Image from "next/image"
export default function Brands(){
    return(
        
        <> 
            <h2 className="text-3xl text-center font-bold tracking-tighter pb-5 sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black dark:from-white dark:to-gray-200">Nuestros proveedores</h2>

        <div className="mt-1 border-y border-gray-400 py-8 text-center rounded-3xl dark:border-gray-800 md:py-7 xl:mt-2">
            <div className="w-full sm:w-2/3 mx-auto grid grid-cols-2 sm:grid-cols-4  gap-y-3 justify-center items-center">
                <div className="flex h-24 items-center justify-center">
                    <Image src="/prusadark.svg" draggable={false} className="hidden select-none dark:block" alt="brand" width={160} height={160} />
                    <Image src="/prusalight.svg" draggable={false} className="block select-none dark:hidden" alt="brand" width={160} height={160} />
                </div>
                
                <div className="flex h-24 items-center justify-center">
                    <Image src="/grilon3dark.svg" draggable={false} className="hidden select-none dark:block" alt="brand" width={160} height={160} />
                    <Image src="/grilon3light.svg" draggable={false} className="block select-none dark:hidden" alt="brand" width={160} height={160} />
                </div>
                <div className="flex h-24 items-center justify-center">
                    <Image src="/printalotdark.svg" draggable={false} className="hidden select-none dark:block" alt="brand" width={160} height={160} />
                    <Image src="/printalotlight.svg" draggable={false} className="block select-none dark:hidden" alt="brand" width={160} height={160} />
                </div>
                
                <div className="flex h-24 items-center justify-center">
                    <Image src="/crealitydark.svg" draggable={false} className="hidden select-none dark:block" alt="brand" width={160} height={160} />
                    <Image src="/crealitylight.svg" draggable={false} className="block select-none dark:hidden" alt="brand" width={160} height={160} />
                </div>
            </div>
        </div>
        </>
        
    )
}

/*
  <h2 className="text-2xl uppercase text-center font-bold pb-2 text-gray-800 dark:text-neutral-400">Marcas que nos proveen</h2>
*/
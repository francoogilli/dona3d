import Image from "next/image"
export default function Brands(){
    return(
        
        <> 
            <h2 className="text-3xl text-center font-bold tracking-tighter pb-5 sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black dark:from-white dark:to-gray-200">Marcas que nos proveen</h2>

        <div className="mt-12 border-y border-gray-400 py-8 text-center rounded-3xl dark:border-gray-800 md:py-7 xl:mt-20">
            <div className="w-full flex flex-wrap gap-x-14 gap-y-3 justify-center items-center">
                <div className="flex h-24 items-center justify-center">
                    <Image src="/prusadark.svg" className="hidden dark:block" alt="brand" width={160} height={160} />
                    <Image src="/prusalight.svg" className="block dark:hidden" alt="brand" width={160} height={160} />
                </div>
                
                <div className="flex h-24 items-center justify-center">
                    <Image src="/grilon3dark.svg" className="hidden dark:block" alt="brand" width={160} height={160} />
                    <Image src="/grilon3light.svg" className="block dark:hidden" alt="brand" width={160} height={160} />
                </div>
                <div className="flex h-24 items-center justify-center">
                    <Image src="/printalotdark.svg" className="hidden dark:block" alt="brand" width={160} height={160} />
                    <Image src="/printalotlight.svg" className="block dark:hidden" alt="brand" width={160} height={160} />
                </div>
                
                <div className="flex h-24 items-center justify-center">
                    <Image src="/crealitydark.svg" className="hidden dark:block" alt="brand" width={160} height={160} />
                    <Image src="/crealitylight.svg" className="block dark:hidden" alt="brand" width={160} height={160} />
                </div>
            </div>
        </div>
        </>
        
    )
}

/*
  <h2 className="text-2xl uppercase text-center font-bold pb-2 text-gray-800 dark:text-neutral-400">Marcas que nos proveen</h2>
*/
import Image from "next/image"
import { MaterialsData } from "src/data"
export default function Materials() {
    return(
        <div className="flex flex-col items-center pb-28">
            <h2 className="font-bold text-center text-2xl pb-14 sm:text-5xl">Trabajamos multiples materiales</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5">
                {
                    MaterialsData.map((material, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <p className="font-bold text-2xl pb-2">{material.title}</p>
                        <div className="sm:size-56 size-36 flex justify-center items-center border  bg-zinc-100 dark:bg-neutral-950 border-zinc-300 dark:border-zinc-800 rounded-3xl">
                        <Image src={`/${material.image}`} className="size-24 sm:size-44" alt="petg" width={180} height={180}/>
                        </div>
                    </div>
                    ))
                }
            </div>

        </div>
    )
}
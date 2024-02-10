import { JSX, SVGProps } from "react"
import { Icon } from "@iconify/react"
import { FeaturesGridData } from "src/data"
export default function FeaturesGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl pb-1 px-3 sm:px-0 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-zinc-950 dark:from-white dark:to-gray-300">
              Porqué elegir <span className="inline from-[#1e6cff] to-[#0840f8] bg-clip-text text-transparent bg-gradient-to-b">Dona 3D</span>
              </h1>
              <p className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">
              Descubre una innovadora solución que combina tecnología unica con diseño personalizado.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  FeaturesGridData.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div className="p-1 flex flex-row sm:flex-col justify-center items-center bg-opacity-90 dark:bg-opacity-50 rounded-full">
                        <Icon icon={feature.icon} className="text-zinc-900 dark:text-white size-9 mb-0 mx-3 sm:mb-5 opacity-95 dark:opacity-85" />
                        <h2 className="text-[1.4rem] font-bold text-zinc-900 dark:text-white">{feature.title}</h2>
                      </div>
                      <p className="text-zinc-800 dark:text-zinc-300">{feature.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

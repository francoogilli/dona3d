import { JSX, SVGProps } from "react"
import { Icon } from "@iconify/react"
export default function FeaturesGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-zinc-950 dark:from-white dark:to-gray-500">
              Porqué elegir Dona 3D
              </h1>
              <p className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">
              Descubre una innovadora solución que combina tecnología unica con diseño personalizado.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2  bg-opacity-90 dark:bg-opacity-50 rounded-full">
                    <Icon icon="material-symbols:work" className="text-zinc-900 dark:text-white h-6 w-6 mb-2 opacity-95 dark:opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">+4 Años</h2>
                  <p className="text-zinc-800 dark:text-zinc-300">
                  Con una trayectoria de más de 4 años en el campo del diseño e impresión 3D, consolidado nuestra experiencia.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2  bg-opacity-90 dark:bg-opacity-50 rounded-full">
                    <MergeIcon className="text-zinc-900 dark:text-white h-6 w-6 mb-2 opacity-95 dark:opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Ultima tecnologia</h2>
                  <p className="text-zinc-800 dark:text-zinc-300">
                  Trabajamos con impresoras 3D de última generación, garantizando así la más alta calidad en nuestros proyectos.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2  bg-opacity-90 dark:bg-opacity-50 rounded-full">
                    <Icon icon="material-symbols:dashboard-customize-outline-rounded" className="text-zinc-900 dark:text-white h-6 w-6 mb-2 opacity-95 dark:opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Trabajos personalizados</h2>
                  <p className="text-zinc-800 dark:text-zinc-300">
                  Nos especializamos en la adaptación precisa de modelos según las exigencias individuales de nuestros clientes.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2  bg-opacity-90 dark:bg-opacity-50 rounded-full">
                    <Icon icon="ph:cube-bold" className="text-zinc-900 dark:text-white h-6 w-6 mb-2 opacity-95 dark:opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Primera calidad</h2>
                  <p className="text-zinc-800 dark:text-zinc-300">
                  Trabajamos con materiales premium de proveedores como PrintaLot y Grilon3, con 4 opciones disponibles para elegir.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2  bg-opacity-90 dark:bg-opacity-50 rounded-full">
                    <Icon icon="ic:sharp-color-lens" className="text-zinc-900 dark:text-white h-6 w-6 mb-2 opacity-95 dark:opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">30+ Colores disponibles</h2>
                  <p className="text-zinc-800 dark:text-zinc-300">
                  Contamos con una extensa gamas de colores, permitiendo una personalización unica en cada impresión.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2  bg-opacity-90 dark:bg-opacity-50 rounded-full">
                    <Icon icon="mdi:printer-3d-nozzle" className="text-zinc-900 dark:text-white h-6 w-6 mb-2 opacity-95 dark:opacity-75" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">4 impresoras 3D</h2>
                  <p className="text-zinc-800 dark:text-zinc-300">
                  Contamos con cuatro impresoras 3D de vanguardia para atender tus necesidades con eficacia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InboxIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MergeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

import { Icon } from "@iconify/react/dist/iconify.js";


export default function FeaturesGrid(){
    return (
        <div className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          
          <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perfect for Makers</h3>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Unlock your creativity with our advanced 3D printing technology. Turn your ideas into reality with our
            easy-to-use platform and professional-grade printers.
          </p>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <Icon icon="mdi:printer-outline" className="w-12 h-12 mx-auto" />
            <h3 className="text-lg font-bold">High-quality prints</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bring your designs to life with stunning details and precision.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Icon icon="clarity:fast-forward-solid" className="w-12 h-12 mx-auto" />
            <h3 className="text-lg font-bold">Fast turnaround time</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Get your prints quickly, so you can focus on creating.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Icon icon="clarity:fast-forward-solid" className="w-12 h-12 mx-auto" />
            <h3 className="text-lg font-bold">Various material options</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose the perfect material for your project from our wide selection.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Icon icon="lucide:highlighter" className="w-12 h-12 mx-auto" />
            <h3 className="text-lg font-bold">Precise detailing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Capture the finest features of your design with our advanced technology.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Icon icon="fa6-regular:user" className="w-12 h-12 mx-auto" />
            <h3 className="text-lg font-bold">Excellent customer support</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            We&apos;re here to help you at every step of the printing process.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
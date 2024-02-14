import { ServicesData } from "src/data";
export default function Services() {
    return (
      <>
        <div className="pt-10 sm:pt-20 sm:px-5 px-2 flex flex-col items-center justify-center ">
          <h2 className="font-bold pb-1 text-4xl sm:text-5xl lg:text-6xl ">¿Qué hacemos?</h2>
          <div className="pt-12 grid grid-cols-1 gap-6 sm:gap-6 sm:grid-cols-2">
            {ServicesData.map((service, index) => (
              <div key={index} className="sm:h-[500px] after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 px-6 pb-16 sm:pb-5 pt-64 text-center text-black dark:text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
              <div className=" absolute inset-0 flex items-center justify-center opacity-20">
              <span className=" flex sm:w-[550px] sm:pt-20 max-w-full items-center justify-center text-zinc-800 dark:text-zinc-400">
              {service.icon}
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] sm:h-[340px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-8 mb-4 text-3xl font-bold text-black dark:text-white uppercase tracking-widest">{service.title}</h1>
            <p className="max-w-[40ch] text-black/85 dark:text-white/75 sm:max-w-[52ch]">{service.description}</p>
            </div>
            ))}
            
          </div>
        </div>
      </>
    );
  }
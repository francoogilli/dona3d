import { ServicesData } from "src/data";
export default function Services() {
    return (
      <>
        <div className="pt-20 sm:px-5 px-2 flex flex-col items-center justify-center ">
          <h2 className="font-bold pb-1 text-[2.65rem] sm:text-5xl lg:text-6xl ">¿Qué hacemos?</h2>
          <div className="pt-12 grid grid-cols-1 gap-6 sm:gap-6 sm:grid-cols-2">
            {ServicesData.map((service, index) => (
              <div key={index} className="bg-neutral-900/5 dark:bg-neutral-500/5 backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center p-10 border border-zinc-200 dark:border-zinc-900">
              <h2 className="text-2xl sm:text-3xl pb-5 text-center font-bold ">{service.title}</h2>
              <p className="text-zinc-900 dark:text-zinc-200 font-medium leading-6 text-sm">{service.description}</p>
            </div>
            ))}
            
          </div>
        </div>
      </>
    );
  }
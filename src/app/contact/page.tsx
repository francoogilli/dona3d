"use client";
import { Icon } from "@iconify/react"
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  const handleSumbit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''});
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 rounded-2xl pt-20 md:grid-cols-2 items-start gap-14 px-4">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter  md:text-5xl/none">Contactanos</h1>
          <p className="text-gray-800 dark:text-gray-400">
          ¡Estamos aquí para ayudarte! Completa el siguiente formulario y te contactaremos lo antes posible.
          </p>
        </div>
        {isLoading && (// Mostrar el indicador de carga si isLoading es verdadero
          <div className="flex items-center justify-center space-x-3 ">
            <span className="animate-spin rounded-full size-7 border-t-2 border-b-2 border-green-700 dark:border-green-500 "></span>
            <span className="text-base font-medium text-green-800 dark:text-green-300">Su mensaje se esta enviando...</span>
          </div>
        )}
        {isSuccess && ( // Mostrar el mensaje de éxito si isSuccess es verdadero
          <div className="flex xl:flex-row flex-col justify-center items-center bg-green-100 dark:bg-green-950 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 px-4 space-x-3 py-3 rounded-xl relative" role="alert">
            <strong className="font-bold">¡Correo enviado con éxito!</strong>
            <span className="block sm:inline">Muchas gracias por contactarnos.</span>
          </div>
        )}
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="space-y-2 flex flex-col justify-start">
              <label className="font-medium" htmlFor="first-name">Nombre</label>
              <input 
                type="text" 
                id="first-name"
                name="firstName"
                value={formData.firstName} // Asociar con el estado formData
                onChange={handleChange} // Manejar cambios en el estado formData 
                className="px-4 py-3 text-sm placeholder:text-black dark:placeholder:text-zinc-200 sm:bg-white/50 bg-white/30 border border-zinc-300 dark:border-neutral-900 sm:dark:bg-black/70 dark:bg-black/30 rounded-xl " placeholder="Ingrese su nombre" />
            </div>
            <div className="space-y-2 flex flex-col justify-start">
              <label className="font-medium" htmlFor="last-name">Apellido</label>
              <input 
              type="text" 
              id="last-name" 
              name="lastName"
              value={formData.lastName} // Asociar con el estado formData
              onChange={handleChange} // Manejar cambios en el estado formData
              className="px-4 py-3 text-sm placeholder:text-black dark:placeholder:text-zinc-200 sm:bg-white/50 bg-white/30 border border-zinc-300 dark:border-neutral-900 sm:dark:bg-black/70 dark:bg-black/30 rounded-xl" placeholder="Ingrese su apellido" />
            </div>
          </div>
          <div className="space-y-2 flex flex-col justify-start">
            <label className="font-medium" htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            value={formData.email} // Asociar con el estado formData
            onChange={handleChange} // Manejar cambios en el estado formData
            className="px-4 py-3 text-sm placeholder:text-black dark:placeholder:text-zinc-200 sm:bg-white/50 bg-white/30 border border-zinc-300 dark:border-neutral-900 sm:dark:bg-black/70 dark:bg-black/30 rounded-xl" placeholder="Ingrese su correo" />
          </div>
          <div className="space-y-2 flex flex-col justify-start">
            <label className="font-medium" htmlFor="message"> Mensaje</label>
            <textarea 
            id="message" 
            rows={4} 
            name="message"
            value={formData.message} // Asociar con el estado formData
            onChange={handleChange} // Manejar cambios en el estado formData
            className="px-4 py-3 text-sm placeholder:text-black dark:placeholder:text-zinc-200 sm:bg-white/50 bg-white/30 border border-zinc-300 dark:border-neutral-900 sm:dark:bg-black/70 dark:bg-black/30 rounded-xl resize-none" placeholder="Escriba su mensaje"></textarea>
          </div>
          <button className="w-full  font-semibold from-green-600 to-green-400 bg-gradient-to-br hover:from-green-600 hover:to-green-600 text-white p-3 rounded-xl" 
          onClick={handleSumbit}>
            Enviar mensaje</button>

        </div>
      </div>
      <div className="space-y-8">
        <div className="sm:space-y-5 space-y-0 h-full">
          <h2 className="text-4xl pb-10 md:text-5xl font-bold">Info de contacto</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Icon icon="mdi:phone" className="size-9 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-lg">Llámanos</p>
                <p className="text-base text-zinc-900 dark:text-zinc-300">+54 3563 411515</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon icon="mdi:email" className="size-9 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-lg">Envíanos un correo</p>
                <p className="text-base text-zinc-900 dark:text-zinc-300">rafaeldona3d@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon icon="mdi:map-marker" className="size-9 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-lg">Visítanos</p>
                <p className="text-base text-zinc-900 dark:text-zinc-300">Libertad 494, Miramar, Córdoba, Argentina</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon icon="mdi:instagram" className="size-9 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold text-lg">Envianos un mensaje</p>
                <p className="text-base text-zinc-900 dark:text-zinc-300">@dona3d_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

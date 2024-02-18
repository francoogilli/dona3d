"use client";
import Image from "next/image";
import Printer from "src/components/visual/printer";
import { storage } from "../../firebase/config"; // Ruta al archivo firebase.js
import { getDownloadURL, ref } from "firebase/storage"; // Importar ref desde firebase/storage
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const urls = [];
        // Obtener las URLs de las imágenes del 1 al 130
        for (let i = 1; i <= 10; i++) {
          const url = await getDownloadURL(ref(storage, `imagenes/${i}.jpg`));
          urls.push(url);
        }
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageUrls();
  }, []);   // Ejecutar solo una vez al montar el componente

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      // Cuando se abre el modal, deshabilita el scroll del body
      document.body.style.overflow = "hidden";
    } else {
      // Cuando se cierra el modal, habilita el scroll del body
      document.body.style.overflow = "auto";
    }

    // Limpia el efecto cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 px-6 pb-16 sm:pb-6 pt-64 text-center text-black dark:text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-1 lg:pt-0">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="flex max-h-full max-w-full items-center justify-center text-zinc-800 dark:text-zinc-400">
              <Printer />
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-[400px] sm:h-[340px] bg-gradient-to-b from-black/0 via-black to-black"></span>
          </div>
          <h1 className="mt-8 mb-4 text-3xl font-bold uppercase tracking-widest">Dona 3D</h1>
          <p className="max-w-[40ch] text-black/85 dark:text-white/75 sm:max-w-[32ch]">Explore nuestra galería de impresiones 3D. Por consultas sobre estos modelos, no dude en contactarnos.</p>
          <a href="" className="pointer z-10 mt-6 flex justify-center items-center text-white rounded-full border border-black dark:border-white bg-black dark:bg-white px-4 py-2 text-sm font-semibold dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100 transition  md:mt-4">Contactar
          <Icon icon="mingcute:right-fill" className="ml-2" />
          </a>
        </div>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} onClick={() => openModal(imageUrl)} className="group relative cursor-zoom-in">
            <Image src={imageUrl} className="rounded-lg" alt="Image" loading="lazy" width={500} height={500} />
          </div>
        ))}
        
      </div>

      {/* Modal para mostrar la imagen seleccionada */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 backdrop-blur-lg absolute inset-0" onClick={closeModal}></div>
          <div className="bg-white rounded-lg overflow-hidden z-10 max-w-3xl max-h-3xl">
            <button
              className="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image src={selectedImage} className="rounded-lg" alt="Large Image" layout="responsive" width={1300} height={900} />
          </div>
        </div>
      )}
    </>
  );
}
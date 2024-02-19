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
  const IMAGES_PER_PAGE = 17;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const promises = [];
        // Crear un array de promesas para obtener las URLs de las imágenes
        for (let i = 1; i <= 100; i++) {
          promises.push(getDownloadURL(ref(storage, `imagenes/${i}.webp`)));
        }
        // Esperar a que todas las promesas se resuelvan
        const urls = await Promise.all(promises);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };
  
    fetchImageUrls();
  }, []);

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

  const totalPages = Math.ceil(imageUrls.length / IMAGES_PER_PAGE);
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  // Calcular el rango de números de página para mostrar
  const pageNumbersToShow = () => {
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = currentPage - halfMaxPagesToShow;
    let endPage = currentPage + halfMaxPagesToShow;

    // Ajustar el inicio y el final si están fuera de los límites
    if (startPage < 1) {
      startPage = 1;
      endPage = maxPagesToShow;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - maxPagesToShow + 1;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 px-6 pb-16 sm:pb-6 pt-64 text-center text-black dark:text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-1 lg:pt-0">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="flex max-h-full max-w-full items-center justify-center text-zinc-800 dark:text-zinc-400">
              <Printer />
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-[400px] sm:h-[340px] bg-gradient-to-b from-white/5 via-white to-white dark:from-black/5 dark:via-black dark:to-black"></span>
          </div>
          <h1 className="mt-8 mb-4 text-3xl font-bold uppercase tracking-widest">Dona 3D</h1>
          <p className="max-w-[40ch] text-black/85 dark:text-white/75 sm:max-w-[32ch]">Explore nuestra galería de impresiones 3D. Por consultas sobre estos modelos, no dude en contactarnos.</p>
          <a href="" className="pointer z-10 mt-6 flex justify-center items-center text-white rounded-full border border-black dark:border-white bg-black dark:bg-white px-4 py-2 text-sm font-semibold dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100 transition  md:mt-4">Contactar
          <Icon icon="mingcute:right-fill" className="ml-2" />
          </a>
        </div>
        {imageUrls.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE).map((imageUrl, index) => (
          <div key={index} onClick={() => openModal(imageUrl)} className="group relative cursor-pointer">
            <Image
              src={imageUrl}
              className="rounded-lg"
              alt="Image"
              loading="lazy"
              objectFit="contain" 
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => changePage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-neutral-200 dark:hover:bg-zinc-700 rounded-l-2xl ${currentPage === 1 ? 'disabled:opacity-40' : ''}`}
        >
          <Icon icon="mingcute:left-line" className="" width={24} />
        </button>
        <div className="bg-zinc-100 dark:bg-zinc-800">
        {pageNumbersToShow().map((pageNumber, i) => (
  <button
    key={i}
    onClick={() => changePage(pageNumber)}
    className={`px-4 py-2 font-medium bg-zinc-100 dark:bg-[#27272A] hover:bg-[neutral-200] dark:hover:bg-[#3F3F46] rounded-xl ${currentPage === pageNumber ? 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white' : ''}`}
  >
    {pageNumber}
  </button>
))}

        </div>
        <button
          onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-neutral-200 dark:hover:bg-zinc-700 rounded-r-2xl ${currentPage === totalPages ? 'disabled:opacity-40' : ''}`}
        >
           <Icon icon="mingcute:right-line" className="" width={24} />
        </button>
      </div>

      {/* Modal para mostrar la imagen seleccionada */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 backdrop-blur-lg absolute inset-0" onClick={closeModal}></div>
          <div className="bg-white/50 dark:bg-black/70 backdrop-blur-xl rounded-lg overflow-hidden z-10 max-w-3xl ">
            <button
              className="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              onClick={closeModal}
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image 
              src={selectedImage} 
              className="rounded-lg" 
              alt="Large Image" 
              priority 
              objectFit="contain" 
              width={768} 
              height={768} 
            />
          </div>
        </div>
      )}
    </>
  );
}

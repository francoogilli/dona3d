"use client";
import React from 'react';
import SimpleGallery from './gallery';
import { Icon } from '@iconify/react';
import { storage } from "../../firebase/config";
import { getDownloadURL, ref } from "firebase/storage";
import { useState, useEffect } from "react";

function pageGallery() {
  const pageSize = 20;
  const [imageUrls, setImageUrls] = useState<Array<{ largeURL: string; thumbnailURL: string; width: number; height: number; }>>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 254; i++) {
          promises.push(getDownloadURL(ref(storage, `imagenes/${i}.webp`)));
        }
        const urls = await Promise.all(promises);
        const imagesData = urls.map(url => ({
          largeURL: url,
          thumbnailURL: url,
          width: 800,
          height: 800,
        }));
        setImageUrls(imagesData);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };
  
    fetchImageUrls();
  }, []);

  const totalPages = Math.ceil(imageUrls.length / pageSize);

  const getPageNumbers = () => {
    const pagesToShow = 5;
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (totalPages <= pagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (endPage === totalPages) {
      startPage = totalPages - (pagesToShow - 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleImages = imageUrls.slice(startIndex, endIndex);

  return (
    <div className="">
      <SimpleGallery galleryID="myGallery" images={visibleImages} />
      <div className='flex justify-center items-center pt-20'>
        <button onClick={() => {
          setCurrentPage(prev => Math.max(prev - 1, 1));
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} disabled={currentPage === 1}
        className='px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-neutral-200 dark:hover:bg-zinc-700 rounded-l-2xl'>
          <Icon icon="mingcute:left-line" className={`${currentPage === 1 ? 'dark:text-zinc-600 text-zinc-400' : ''}`} width={20} />
        </button>
        {getPageNumbers().map(page => (
          <div className="bg-zinc-100 dark:bg-zinc-800 inline-block" key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`px-4 py-1.5 rounded-xl text-lg font-medium ${currentPage === page ? 
                'shadow-blue relative overflow-hidden bg-gradient-to-tr to-blue-400 hover:to-blue-400 hover:from-blue-700 from-blue-600 dark:to-blue-500 dark:from-blue-700 dark:hover:to-blue-500 dark:hover:from-blue-800 text-white' : 
                'bg-zinc-100 dark:bg-zinc-800 -z-10 font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white'}`}
            >
              {page}
            </button>
          </div>
        ))}
        <button onClick={() => {
          setCurrentPage(prev => Math.min(prev + 1, totalPages));
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} disabled={currentPage === totalPages}
        className='px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-neutral-200 dark:hover:bg-zinc-700 rounded-r-2xl'>
          <Icon icon="mingcute:right-line" className={`${currentPage === totalPages ? 'dark:text-zinc-600 text-zinc-400' : ''}`} width={20} />
        </button>
      </div>
    </div>
  );
}

export default pageGallery;

"use client";
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Printer from 'src/components/visual/printer';
import { Icon } from '@iconify/react';

export default function SimpleGallery(props: { galleryID: string | undefined; images: any[]; }) {
  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = null; // Initialize lightbox as null
    if (!props.images) return; // Add this check to handle undefined props.images
  
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  
    return () => {
      if (lightbox) { // Check if lightbox is not null before calling destroy
        lightbox.destroy();
      }
    };
  }, [props.images, props.galleryID]);
   // Add props.images and props.galleryID to the dependency array

  if (!props.images) return null; // Return null if props.images is undefined

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" id={props.galleryID}>
        
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
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          className='rounded-lg overflow-hidden'
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} className='' width={400} height={400} alt="" />
        </a>
      ))}
      
    </div>
  );
}

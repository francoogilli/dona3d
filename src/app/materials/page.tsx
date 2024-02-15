"use client";
import React from 'react';
import { MaterialsData } from 'src/data';
import { Icon } from '@iconify/react';
import Image from 'next/image';
const Materials: React.FC = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="sm:text-5xl text-4xl font-semibold text-center mb-12">Materiales que utilizamos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {MaterialsData.map((material, index) => (
            <div key={index} className=" bg-black/5 dark:bg-white/5 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl text-center font-bold mb-4">{material.title}</h3>
              <Image src={`/${material.image}`} className="mx-auto size-44" alt="petg" width={180} height={180}/>
              <ul className="list-none sm:px-4 pb-4">
                {material.characters.map((character, index) => (
                  <React.Fragment key={index}>
                    <li className='font-semibold text-sm'>{character.title}</li>
                    {index !== material.characters.length - 1 && <hr className="my-2 border-gray-600" />}
                  </React.Fragment>
                ))}
              </ul>
              <p className='pt-8 pb-5 sm:p-4 sm:pt-9 font-bold text-lg text-green-500'>Perfecto para:</p>
              <ul className='list-none sm:px-4'>
                {material.perfectFor.map((perfect, index) => (
                  <React.Fragment key={index}>
                  <li key={index} className="text-sm flex items-center gap-x-2 font-medium"><Icon icon="ic:baseline-check-circle" className="text-green-500"/>{perfect.title}</li>
                    {index !== material.perfectFor.length - 1 && <hr className="my-2 border-gray-600" />}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;

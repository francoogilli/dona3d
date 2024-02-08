"use client"

import React from "react";
import  ThemeSwitcher  from "./theme-switcher";
import { SIDENAV_ITEMS } from 'src/constants';
const Header = () => {
    
    
    return (
        <div className="sticky inset-x-0 backdrop-blur-2xl top-0 z-30 w-full transition-all " id="header-nav">
      <div className="flex h-[47px] mx-auto lg:w-10/12 items-center justify-between px-4">
        <div className="flex items-center gap-x-3 justify-center">
        <div className="border border-dashed size-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 border-black dark:border-white">     
        </div>
        <span className="font-bold text-xl">Dona 3D</span>
        </div>
        
        
          <div className=" items-center space-x-8 hidden md:flex">
            {SIDENAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="text-sm font-semibold text-gray-800 dark:text-zinc-200 transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
                {item.title}
                </a>
            ))}
          </div>

        <div className="flex items-center space-x-4 mr-10 sm:mr-0">
          <ThemeSwitcher />
          <span className="hidden md:block text-white cursor-pointer tracking-tight text-sm font-semibold bg-gradient-to-br from-[#455eb5] via-[#5643cc] to-[#673fd7] px-3 py-1.5 rounded-full">Contacto</span>
        </div>
      </div>
    </div>
    )
}
export default Header
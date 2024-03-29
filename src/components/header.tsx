"use client"

import React from "react";
import  ThemeSwitcher  from "./theme-switcher";
import { SIDENAV_ITEMS } from 'src/constants';
import { Icon } from "@iconify/react";
const Header = () => {
    
    
    return (
        <div className="sticky inset-x-0 backdrop-blur-lg bg-white/75 dark:bg-[#050505]/80 top-0 z-30 w-full transition-all " id="header-nav">
      <div className="flex h-[57px] mx-auto lg:w-10/12 items-center justify-between px-4">
        <div className="flex items-center gap-x-3 justify-center">
        
        <span className="font-bold text-xl">Dona 3D</span>
        </div>
        
        
          <div className=" items-center space-x-9 hidden md:flex">
            {SIDENAV_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="text-sm font-semibold text-gray-800 dark:text-zinc-200 dark:hover:text-white transition-colors duration-200 hover:text-black ">
                {item.title}
                </a>
            ))}
          </div>

        <div className="flex items-center space-x-4 mr-10 sm:mr-0">
          <ThemeSwitcher />
          <a href="mailto:rafaeldona3d@gmail" className="sm:block hidden" target="_blank" rel="noreferrer">
          <Icon icon="heroicons-outline:mail" className="cursor-pointer dark:text-zinc-200 dark:hover:text-zinc-100 text-zinc-800 hover:text-zinc-900" width="24" height="24" />
          </a>
          <a href="https://wa.me/543563411515" className="sm:block hidden" target="_blank" rel="noreferrer">
            <Icon icon="bi:whatsapp" className="cursor-pointer dark:text-zinc-200 dark:hover:text-zinc-100 text-zinc-800 hover:text-zinc-900" width="20" height="20" />
          </a>
        </div>
      </div>
    </div>
    )
}
export default Header
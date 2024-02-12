import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Servicio',
    path: '/services',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    
  },
  {
    title: 'Materiales',
    path: '/materials',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Galeria',
    path: '/gallery',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
  },
  {
    title: 'Contacto',
    path: '/contact',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
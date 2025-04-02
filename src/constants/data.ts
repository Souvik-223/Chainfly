import { NavItem } from 'types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Maintainance Reports',
    url: '/dashboard/maintenance',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Defects and Issues',
    url: '/dashboard/defects',
    icon: 'help',
    shortcut: ['d', 'i'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'System Health Insight',
    url: '/dashboard/systemhealth',
    icon: 'billing',
    shortcut: ['s', 'i'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'GIS Map',
    url: '/dashboard/gismap',
    icon: 'Map',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Maintainance Scheduler',
    url: '/dashboard/task',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];

export interface PanelImage {
  key: number;
  src: string;
  alt: string;
  height: string;
  width: string;
}

export const PanelImageData: PanelImage[] = [
  {
    key: 1,
    src: '/Defects/frame1.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 2,
    src: '/Defects/frame2.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 3,
    src: '/Defects/frame3.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 4,
    src: '/Defects/frame4.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 5,
    src: '/Defects/frame5.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 6,
    src: '/Defects/frame6.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 7,
    src: '/Defects/frame7.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 8,
    src: '/Defects/frame8.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 9,
    src: '/Defects/frame9.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  }
];

export interface HotspotImage {
  key: number;
  src: string;
  alt: string;
  height: string;
  width: string;
}

export const HotspotImageData: HotspotImage[] = [
  {
    key: 1,
    src: '/Hotspots/hotspot1.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 2,
    src: '/Hotspots/hotspot2.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 3,
    src: '/Hotspots/hotspot3.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 4,
    src: '/Hotspots/hotspot4.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 5,
    src: '/Hotspots/hotspot5.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 6,
    src: '/Hotspots/hotspot6.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 7,
    src: '/Hotspots/hotspot7.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 8,
    src: '/Hotspots/hotspot8.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 9,
    src: '/Hotspots/hotspot9.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  }
];

export const user = {
  id: '1',
  name: 'John',
  email: 'demo@gmail.com',
  image: 'https://api.slingacademy.com/public/sample-users/1.png'
};

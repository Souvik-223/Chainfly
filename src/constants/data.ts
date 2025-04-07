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
  url: string;
  alt: string;
  height: string;
  width: string;
}

export const PanelImageData: PanelImage[] = [
  {
    key: 1,
    src: '/DustDefects/frame1.jpg',
    url: '/ElectricalDefects/frame1.jpg',
    alt: 'frame1',
    height: '80px',
    width: '88px'
  },
  {
    key: 2,
    src: '/DustDefects/frame2.jpg',
    url: '/ElectricalDefects/frame2.jpg',
    alt: 'frame2',
    height: '80px',
    width: '88px'
  },
  {
    key: 3,
    src: '/DustDefects/frame3.jpg',
    url: '/ElectricalDefects/frame3.jpg',
    alt: 'frame3',
    height: '80px',
    width: '88px'
  },
  {
    key: 4,
    src: '/DustDefects/frame4.jpg',
    url: '/ElectricalDefects/frame4.jpg',
    alt: 'frmae4',
    height: '80px',
    width: '88px'
  },
  {
    key: 5,
    src: '/DustDefects/frame5.jpg',
    url: '/ElectricalDefects/frame5.jpg',
    alt: 'frame5',
    height: '80px',
    width: '88px'
  }
];

export const panelDefectsData = [
  {
    id: 1,
    DustDetection: {
      DustParticles: 4,
      BirdDroppings: 1,
      DryLeaves: 2,
      DryDebris: {
        Leaves: 2,
        SeedHusks: 3
      }
    },
    electricalFaultDetection: {
      Anomalies: 0,
      CellComponents: 0,
      Hotspots: {
        SCHT1: 0,
        SCHT2: 0
      }
    }
  },
  {
    id: 2,
    DustDetection: {
      DustParticles: 7,
      BirdDroppings: 0,
      DryLeaves: 2,
      DryDebris: {
        Leaves: 2,
        SeedHusks: 1
      }
    },
    electricalFaultDetection: {
      Anomalies: 0,
      CellComponents: 1,
      Hotspots: {
        SCHT1: 0,
        SCHT2: 0
      }
    }
  },
  {
    id: 3,
    DustDetection: {
      DustParticles: 2,
      BirdDroppings: 1,
      DryLeaves: 3,
      DryDebris: {
        Leaves: 3,
        SeedHusks: 2
      }
    },
    electricalFaultDetection: {
      Anomalies: 0,
      CellComponents: 1,
      Hotspots: {
        SCHT1: 0,
        SCHT2: 0
      }
    }
  },
  {
    id: 4,
    DustDetection: {
      DustParticles: 4,
      BirdDroppings: 0,
      DryLeaves: 3,
      DryDebris: {
        Leaves: 3,
        SeedHusks: 3
      }
    },
    electricalFaultDetection: {
      Anomalies: 0,
      CellComponents: 3,
      Hotspots: {
        SCHT1: 0,
        SCHT2: 0
      }
    }
  },
  {
    id: 5,
    DustDetection: {
      DustParticles: 3,
      BirdDroppings: 0,
      DryLeaves: 3,
      DryDebris: {
        Leaves: 3,
        SeedHusks: 2
      }
    },
    electricalFaultDetection: {
      Anomalies: 0,
      CellComponents: 1,
      Hotspots: {
        SCHT1: 0,
        SCHT2: 0
      }
    }
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
    src: '/Hotspot/hotspot1.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 2,
    src: '/Hotspot/hotspot2.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 3,
    src: '/Hotspot/hotspot3.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 4,
    src: '/Hotspot/hotspot4.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  },
  {
    key: 5,
    src: '/Hotspot/hotspot5.jpg',
    alt: 'olivia.martin@email.com',
    height: '80px',
    width: '88px'
  }
];

export const hotspotDefectsData = [
  {
    id: 1,
    HotspotDetection: {
      PID: 3,
      PID2: 3,
      PV: 2,
      Hotspots: 1
    }
  },
  {
    id: 2,
    HotspotDetection: {
      PID: 10,
      PID2: 0,
      PV: 1,
      Hotspots: 2
    }
  },
  {
    id: 3,
    HotspotDetection: {
      PID: 0,
      PID2: 19,
      PV: 3,
      Hotspots: 3
    }
  },
  {
    id: 4,
    HotspotDetection: {
      PID: 0,
      PID2: 3,
      PV: 3,
      Hotspots: 11
    }
  },
  {
    id: 5,
    HotspotDetection: {
      PID: 3,
      PID2: 8,
      PV: 3,
      Hotspots: 13
    }
  }
];

export const user = {
  id: '1',
  name: 'John',
  email: 'demo@gmail.com',
  image: 'https://api.slingacademy.com/public/sample-users/1.png'
};

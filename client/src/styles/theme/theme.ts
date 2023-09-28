export const theme = {
  WIDTH: {
    'w-full': '100%',
    'w-screen': '100vw',
    'min-w-0': '0px',
    'min-w-full': '100%',
    'min-w-min': 'min-content',
    'min-w-max': 'max-content',
    'min-w-fit': 'fit-content',
    'grid-min': '20.5rem',
  },
  HEIGHT: {
    'h-full': '100%',
    'h-screen': '100vh',
    'h-min': 'min-content',
    'h-max': 'max-content',
    'h-fit': 'fit-content',
    'mo-nav-height': '4.5rem',
    'bottomsheet-header': '2rem',
  },
  COLOR: {
    'black': '#000',
    'white': '#fff',
    'orange': '#FF5E34',
    'green': '#3CBB80',
    'skyblue': '#56C9CC',
    'disabled': '#005E61',
    'gray-1': '#E9E7DF',
    'gray-2': '#B0B0B0',
    'gray-3': '#868585',
    'gray-4': '#5F5F5F',
    'gray-5': '#413F3F',
    'gray-6': '#232120',
    'gray-7': '#171717',
  },
  TEXT_SIZE: {
    'text-88': '5.5rem',
    'text-80': '5rem',
    'text-50': '3.125rem',
    'text-40': '2.5rem',
    'text-36': '2.25rem',
    'text-32': '2rem',
    'text-28': '1.75rem',
    'text-24': '1.5rem',
    'text-20': '1.25rem',
    'text-18': '1.125rem',
    'text-16': '1rem',
    'text-14': '0.875rem',
    'text-12': '0.75rem',
  },
  SPACING: {
    'px-50': '3.125rem',
    'py-100': '6.5rem',
    'gap-90': '5.625rem',
    'gap-50': '3.125rem',
    'gap-40': '2.5rem',
    'gap-32': '2rem',
    'gap-24': '1.5rem',
    'gap-20': '1.25rem',
    'gap-16': '1rem',
    'gap-12': '0.75rem',
    'gap-10': '0.625rem',
  },
  BORDER: {
    'rounded-none': '0px',
    'rounded-s': '10px',
    'rounded-md': '16px',
    'rounded-tag': '50px',
    'rounded-full': '50%',
    'rounded-input': '5px',
    'weight-1': '1px',
    'weight-5': '5px',
  },
  TRANSITION: {
    basic: '0.3s ease-in-out',
  },
  SHADOW: {
    'shadow-sm': '0 5px 10px 0 rgba(0, 0, 0, 0.25)',
    'shadow-lg':
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    'shadow-4xl': 'rgba(0, 0, 0, 0.25) 0px 5px 15px',
  },
  OPACITY: {
    'opacity-0': 0,
    'opacity-5': 0.05,
    'opacity-10': 0.1,
    'opacity-20': 0.2,
    'opacity-25': 0.25,
    'opacity-30': 0.3,
    'opacity-40': 0.4,
    'opacity-50': 0.5,
    'opacity-60': 0.6,
    'opacity-70': 0.7,
    'opacity-75': 0.75,
    'opacity-80': 0.8,
    'opacity-90': 0.9,
    'opacity-95': 0.95,
    'opacity-100': 1,
  },
  FONT_WEIGHT: {
    'WEIGHT-100': 100,
    'WEIGHT-200': 200,
    'WEIGHT-300': 300,
    'WEIGHT-400': 400,
    'WEIGHT-500': 500,
    'WEIGHT-600': 600,
    'WEIGHT-700': 700,
  },
  Z_INDEX: {
    'LEVEL-1': 10,
    'LEVEL-2': 20,
    'LEVEL-3': 30,
    'LEVEL-4': 40,
    'LEVEL-5': 50,
    'LEVEL-6': 60,
  },
  FONT_FAMILY: {
    'Pretendard': 'Pretendard',
    'IBM Plex Sans KR': 'IBM Plex Sans KR',
  },
  DEVICE: {
    mobile: `screen and (max-width: 580px)`,
    tablet: `screen and (max-width: 768px)`,
    pc: `screen and (max-width: 1024px)`,
  },
};

export type ThemeType = typeof theme;

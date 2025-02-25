/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      flex: {
        'default-card': '1 1 5%',
        'active-card': '2 2 35%',
        0: '0 0 auto',
      },
      borderRadius: {
        base: '10px',
        20: '20px',
      },
      colors: {
        black: {
          DEFAULT: '#35363A',
          100: '#1e1f22',
          200: '#17181B',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        milk: {
          DEFAULT: '#F0F5FD',
          100: '#E1E8F3',
        },
        blue: {
          DEFAULT: '#2495FE',
        },
        purple: {
          DEFAULT: '#5554A0',
        },
        brown: {
          DEFAULT: '#833C3C',
        },
        grey: {
          DEFAULT: '#1E1F224C',
        },
        'main-color': {
          DEFAULT: '#222527',
        },
        'light-blue': {
          DEFAULT: '#E9F0F5',
        },
      },
      keyframes: {
        flyArrow: {
          '0%': {
            transform: 'translateY(0.1rem)',
          },
          '100%': {
            transform: 'translateY(-0.1rem)',
          },
        },
        flyClouds: {
          from: {
            transform: 'rotate(-0.001deg) translate3d(12px, 48px, 0) rotate(-0.001deg)',
          },
          to: {
            transform: 'rotate(360.001deg) translate3d(12px, 48px, 0) rotate(-360.001deg)',
          },
        },
      },
      animation: {
        flyArrow: 'flyArrow 0.6s ease-in-out infinite alternate',
        flyHorizontal: 'flyClouds 35s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
      },
    },
    screens: {
      xxs: '310px',
      xs: '370px',
      sm: '450px',
      md: '576px',
      lg: '768px',
      xl: '992px',
      '2xl': '1370px',
      '3xl': '1630px',
      '4xl': '1795px',
    },
    fontFamily: {
      ex: ['Extatica', 'sans-serif'],
      ev: ['Evolventa', 'sans-serif'],
      np: ['TTNormsPro', 'sans-serif'],
    },
    fontSize: {
      '2xxs': ['0.75rem', '1.2'] /* fontSize:12px, lineHeight: 15.6px */,
      xxs: ['0.8125rem', '1.2'] /* fontSize:13px, lineHeight: 18.2px */,
      xs: ['0.875rem', '1.2'] /* fontSize:14px, lineHeight: 18.2px */,
      sm: ['0.9375rem', '1.2'] /* fontSize:14px, lineHeight: 19.5px */,
      base: ['1.0625rem', '1.2'] /* fontSize:17px, lineHeight: 22.1px */,
      md: ['1.125rem', '1.2'] /* fontSize:18px, lineHeight: 23.4px */,
      lg: ['1.1875rem', '1.2'] /* fontSize:19px, lineHeight: 24.7px */,
      xl: ['1.25rem', '1.2'] /* fontSize:20px, lineHeight: 26px */,
      '2xl': ['1.5625rem', '1.2'] /* fontSize:25px, lineHeight: 32.5px */,
      '3xl': ['1.875rem', '1.2'] /* fontSize:30px, lineHeight: 39px */,
      '4xl': ['2.0625rem', '1.2'] /* fontSize:33px, lineHeight: 42.9px */,
      '5xl': ['2.1875rem', '1.2'] /* fontSize:35px, lineHeight: 45.5px */,
      '6xl': ['2.5rem', '1.2'] /* fontSize:40px, lineHeight: 52px */,
      '7xl': ['2.8125rem', '1.2'] /* fontSize:45px, lineHeight: 58.5px */,
      '8xl': ['3.4375rem', '1.2'] /* fontSize:55px, lineHeight: 71.5px  */,
      '9xl': ['3.75rem', '1.2'] /* fontSize:60px, lineHeight: 78px  */,
      '10xl': ['4.0625rem', '1.2'] /* fontSize:65px, lineHeight: 78px  */,
      '11xl': ['4.375rem', '1.2'] /* fontSize:70px, lineHeight: 89px  */,
      '12xl': ['6rem', '1.2'] /* fontSize:96px, lineHeight: 124.8px  */,
    },
  },
  plugins: [],
};

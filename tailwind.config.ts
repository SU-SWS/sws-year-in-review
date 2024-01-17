/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

const path = require('path');
const decanter = require('decanter');

// Path to custom Tailwind plugins for Directory
const dir = path.resolve(__dirname, 'tailwind/plugins');

export default {
  presets: [
    decanter,
  ],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utilities/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    containers: require(`${dir}/theme/containers.js`)(),
    extend: {
      colors: require(`${dir}/theme/colors.js`)(),
      fontFamily: require(`${dir}/theme/fontFamily.js`)(),
      screens: require(`${dir}/theme/screens.js`)(),
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require(`${dir}/base/base.js`)(),
  ],
} satisfies Config;

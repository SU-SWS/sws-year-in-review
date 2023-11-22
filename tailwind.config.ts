/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

const path = require('path');
const decanter = require('decanter');

export default {
  presets: [
    decanter,
  ],
  content: [
    './app/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utilities/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config;
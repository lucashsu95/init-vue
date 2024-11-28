/** @type {import('tailwindcss').Config} */

const content = ['./index.html', './src/*.{ts,vue}', './src/**/*.{ts,vue}']
const plugins = []
export const theme = {
  extend: {
    colors: {
      primary: '#63e2b7',
      warning: '#f2c97d',
      danger: '#e88080',
      info: '#70c0e8'
    }
  }
}

export { content, plugins, theme }

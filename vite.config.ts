import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  base: '/WebGPU-Ocean/',
  plugins: [glsl()],
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separate React into its own chunk
                    'react-vendor': ['react', 'react-dom'],

                    // Separate Three.js (biggest library)
                    'three': ['three', '@react-three/fiber', '@react-three/drei'],

                    // Separate GSAP animations
                    'gsap': ['gsap', '@gsap/react'],

                    // Separate EmailJS
                    'emailjs': ['@emailjs/browser'],
                }
            }
        },
        chunkSizeWarningLimit: 1000, // Suppress warning up to 1MB
        sourcemap: false, // Disable sourcemaps in production for smaller files
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['three', 'gsap', '@react-three/fiber', '@react-three/drei']
    }
});
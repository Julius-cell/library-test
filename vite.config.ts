import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig(({ command, mode }) => {
  const port = 3000;

  console.log(command, mode);

  if (mode === 'development') {
    console.log('Ambiente desarrollo');
  } else {
    console.log('Ambiente producción');
  }

  return {
    plugins: [react()],
    server: {
      port,
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/lib', 'main.tsx'),
        name: 'demo',
        fileName: (format, entryName) => {
          console.log(format, entryName);
          return `demo.${format}.js`;
        },
      },
    },
  };
});

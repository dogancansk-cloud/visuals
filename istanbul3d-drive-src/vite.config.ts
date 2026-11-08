import { defineConfig, type Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

/** Dev server: map bytes stay in ../istanbul3d and are not copied into this package. */
function serveSiblingMap(): Plugin {
  const root = path.resolve(__dirname, '../istanbul3d');
  const types: Record<string, string> = {
    '.json': 'application/json',
    '.js': 'text/javascript',
    '.wasm': 'application/wasm',
    '.ktx2': 'application/octet-stream',
    '.glb': 'model/gltf-binary',
    '.jpg': 'image/jpeg',
    '.css': 'text/css',
  };
  return {
    name: 'serve-sibling-map',
    configureServer(server) {
      server.middlewares.use('/istanbul3d', (req, res, next) => {
        const rel = decodeURIComponent((req.url || '/').split('?')[0]);
        const fp = path.normalize(path.join(root, rel));
        if (!fp.startsWith(root) || !fs.existsSync(fp) || !fs.statSync(fp).isFile()) return next();
        res.setHeader('Content-Type', types[path.extname(fp)] || 'application/octet-stream');
        fs.createReadStream(fp).pipe(res);
      });
    },
  };
}

export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: '../istanbul3d-drive',
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
  plugins: [serveSiblingMap()],
});

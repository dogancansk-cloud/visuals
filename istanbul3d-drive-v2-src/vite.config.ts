import { defineConfig, type Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// Geliştirme sunucusu: veri ../istanbul3d-drive-v2/data, modeller ../istanbul3d (kopyalanmaz)
function serveSiblings(): Plugin {
  const roots: Record<string, string> = { '/data': path.resolve(__dirname, '../istanbul3d-drive-v2/data'), '/istanbul3d': path.resolve(__dirname, '../istanbul3d') };
  return {
    name: 'serve-siblings',
    configureServer(server) {
      for (const [mount, root] of Object.entries(roots)) server.middlewares.use(mount, (req, res, next) => {
        const fp = path.normalize(path.join(root, decodeURIComponent((req.url || '/').split('?')[0])));
        if (!fp.startsWith(root) || !fs.existsSync(fp) || !fs.statSync(fp).isFile()) return next();
        fs.createReadStream(fp).pipe(res);
      });
    },
  };
}

export default defineConfig({
  base: './',
  publicDir: false,
  build: { outDir: '../istanbul3d-drive-v2', emptyOutDir: false, sourcemap: false, chunkSizeWarningLimit: 1200, target: 'es2020' },
  worker: { format: 'es' },
  plugins: [serveSiblings()],
});

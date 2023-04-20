import express from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const port = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createServer = async () => {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const template = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      const transformedTemplate = await vite.transformIndexHtml(url, template);
      const parts = transformedTemplate.split('<!--app-html-->');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
        },
        omShellError(error: unknown) {
          const err = error as Error;
          console.error(err);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (error) {
      const err = error as Error;
      vite.ssrFixStacktrace(err);
      next(err);
    }
  });

  app.listen(port);
  console.log(`Server started at http://localhost:${port}/`);
};

createServer();

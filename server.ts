import express from 'express';
import serveStatic from 'serve-static';
import url from 'url';
import { resolve } from 'path';
import { ViteDevServer, createServer as createViteServer } from 'vite';

let vite: ViteDevServer;
const port = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === 'production';

const createServer = async () => {
  const app = express();

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    app.use(vite.middlewares);
  } else {
    app.use(serveStatic('./dist/client', { index: false }));
  }

  app.use('*', async (req, res, next) => {
    const urlOrig = req.originalUrl;
    let handleRender;

    try {
      if (!isProd) {
        handleRender = await (await vite.ssrLoadModule('/src/entry-server.tsx')).handleRender;
      } else {
        handleRender = (
          await import(url.pathToFileURL(resolve('./dist/server/entry-server.js')).href)
        ).handleRender;
      }

      await handleRender(urlOrig, res);
    } catch (error) {
      const err = error as Error;

      if (!isProd) {
        vite.ssrFixStacktrace(err);
        next(err);
      } else {
        console.log(err.message);
        res.status(500).end(err);
      }
    }
  });

  app.listen(port);
  console.log(`Server started at http://localhost:${port}/`);
};

createServer();

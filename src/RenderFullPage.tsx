interface RenderFullPageProps {
  html: React.ReactElement;
  preloadedState: string;
}

export const RenderFullPage = (props: RenderFullPageProps) => {
  const isProd = import.meta.env.MODE === 'production';

  return (
    <html lang="en">
      <head>
        {!isProd && (
          <>
            <script
              type="module"
              dangerouslySetInnerHTML={{
                __html: `
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
          `,
              }}
            ></script>
            <script type="module" src="/@vite/client"></script>
          </>
        )}
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {isProd && <link rel="stylesheet" href="./assets/entry-client.css" />}
        <title>Module06</title>
      </head>
      <body>
        <div id="root">{props.html}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${props.preloadedState}`,
          }}
        ></script>
        <script
          type="module"
          src={isProd ? './assets/entry-client.js' : './src/entry-client.tsx'}
        ></script>
      </body>
    </html>
  );
};

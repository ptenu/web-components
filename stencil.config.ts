import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ptu-elements',
  globalStyle: 'src/global/global.scss',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
    }),
  ],
  outputTargets: [
    react({
      componentCorePackage: 'ptu-elements',
      proxiesFile: '../ptu-elements/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};

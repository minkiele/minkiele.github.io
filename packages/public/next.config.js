/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('./remark/remarkPluginRemoveH1')],
  },
});

const nextConfigWidthMdx = withMdx(nextConfig);

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = async (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      ...nextConfigWidthMdx,
      distDir: '../../out',
      env: {
        // Every time we build the app invalidate the request for Discogs API
        NEXT_BUILD_TIMESTAMP: new Date().toISOString(),
      },
      webpack: (config, options) => {
        if (!options.isServer && !options.dev) {
          const { GenerateSW } = require('workbox-webpack-plugin');
          config.plugins.push(
            new GenerateSW({
              swDest: `${__dirname}/public/service-worker.js`,
              exclude: [/manifest\.js(on)?$/i],
              runtimeCaching: [
                {
                  handler: 'CacheFirst',
                  urlPattern: /discogs/,
                },
              ],
            })
          );
        }
        if (nextConfigWidthMdx.webpack) {
          return nextConfigWidthMdx.webpack(config, options);
        }
        return config;
      },
    };
  }
  return nextConfigWidthMdx;
};

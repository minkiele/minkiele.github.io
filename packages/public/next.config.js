/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
};

const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('./remark/remarkPluginRemoveH1')],
    rehypePlugins: [],
  },
});

const nextConfigWidthMdx = withMdx(nextConfig);

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = async (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      ...nextConfigWidthMdx,
      distDir: '../../docs',
    };
  }
  return nextConfigWidthMdx;
};

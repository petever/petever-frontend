const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return {
      ...config,
      mode: prod ? 'production' : 'development',
    };
  },
});

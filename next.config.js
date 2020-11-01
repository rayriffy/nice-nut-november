const moment = require('moment-timezone')

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  env: {
    buildNumber: moment().tz('Asia/Bangkok').format('YYYYMMDD.HH'),
  },
  future: {
    excludeDefaultMomentLocales: true,
  },
  images: {
    domains: ['t.nhentai.net'],
  },
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
})

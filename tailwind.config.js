module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}

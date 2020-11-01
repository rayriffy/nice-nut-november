module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    filter: {
      none: 'none',
      blur: 'blur(15px)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(5px)',
      'blur-heavy': 'blur(20px)',
    },
    extend: {
      backgroundColor: {
        'black-overlay': 'rgba(0, 0, 0, 0.60)',
      },
    },
  },
  variants: {
    filter: ['responsive', 'hover'],
    backdropFilter: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-filters')],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}

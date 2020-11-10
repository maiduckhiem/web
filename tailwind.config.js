module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
        '5':'1.25rem',
        '10':'2.5rem',
        'tim': '#884583',
      },
      spacing: {
         '35': '8.5rem',
         '72': '27rem',
         '66': '21rem',
         '75':'30rem'
        }
    }
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'motion-safe', 'group-hover'],
     opacity: ['responsive', 'hover', 'focus', 'disabled'],
     textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: []
}

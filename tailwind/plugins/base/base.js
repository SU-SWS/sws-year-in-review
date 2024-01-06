/**
 * Campaign custom base styles extending Decanter 7 base
 */

module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      html: {
        color: '#ffffff',
      },
      body: {
        fontSize: '1.8rem',

        '@screen md': {
          fontSize: '1.9rem',
        },
        '@screen lg': {
          fontSize: '2.1rem',
        },
        '@screen 2xl': {
          fontSize: '2.3rem',
        },
      },
    });
  };
};

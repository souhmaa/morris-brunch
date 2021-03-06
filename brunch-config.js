module.exports = {
  paths: {
    "public": 'www'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/,
      },
      order: {
        before: []
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': /^(?!app)/
      },
      order: {
        before: [],
        after: []
      }
    }
  },

  plugins: {
    babel: { presets: ['es2015'] },
    jshint: {
      pattern: /^app[\\\/].*\.js$/,
      options: {
        maxerr: 0,
        camelcase: true,
        bitwise: true,
        esversion: 6,
        curly: true,
        unused: true,
        maxlen: 80,
        quotmark: 'single'
      },
      globals: {
        jQuery: true
      },
      warnOnly: true
    }
  },

  npm: {
    styles: {
      bootstrap: ['dist/css/bootstrap.css'],
      ['morris-js-module']: ['morris.css']
    }

  }
};
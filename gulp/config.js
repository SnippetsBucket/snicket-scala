export const browserSyncConfig = {
  proxy: {
    target: 'http://localhost:9000'
  },
  port: 35729,
  files: [
    './public/index.html',
    './public/assets/js/bundle/app.js'
  ]
};

export const browserifyConfig = {
  // Enable source maps
  debug: true,
  // A separate bundle will be generated for each
  // bundle config in the list below
  bundleConfigs: [{
    entries: './public/assets/js/app/app.js',
    dest: './public/assets/js/bundle/',
    outputName: 'app.js'
  }],
  extensions: ['.jsx']
};

export const cssModulesifyConfig = {
  output: './public/assets/css/app.css'
};

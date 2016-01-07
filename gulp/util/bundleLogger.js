/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

import gutil from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

let startTime;

const bundleLogger = {
  start: filepath => {
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath) + '...');
  },

  end: filepath => {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};

export default bundleLogger;

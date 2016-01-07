/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

import gulp from 'gulp';

gulp.task('watch', ['setWatch', 'browserSync']);

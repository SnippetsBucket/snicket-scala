/*
 gulpfile.babel.js
 ===========
 Task files in gulp/tasks/.
 */

import requireDir from 'require-dir';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

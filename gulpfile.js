 'use strict';

import gulp from "gulp";
import { path } from './gulp/config/path.js';
import { plugins } from "./gulp/config/plugins.js";
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { script } from './gulp/tasks/script.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';

const { watch, parallel, series, task } = gulp;

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watchFiles() {
    watch(path.watch.html, html);
    watch(path.watch.scss, scss);
    watch(path.watch.js, script);
    watch(path.watch.images, images);
    watch([path.watch.fonts, path.watch.icons], fonts);
}

const mainTasks =  parallel(html, scss, script, images, fonts);

const dev = series(reset, mainTasks, parallel(watchFiles, server));
const build = series(reset, mainTasks);
task('default', dev);

export { dev };
export { build };
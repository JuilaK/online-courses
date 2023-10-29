import pug from 'gulp-pug';

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(pug({
        pretty: true,
        verbose: true
    }))
    .pipe(app.plugins.replace(/@img\//g, './images/'))
    .pipe(app.plugins.replace(/@scss\//g, './css/'))
    .pipe(app.plugins.replace(/@js\//g, './scripts/'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}
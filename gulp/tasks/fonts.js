export const fonts = () => {
    return app.gulp.src([app.path.src.fonts, app.path.src.icons])
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(app.plugins.browsersync.reload({stream: true}))
        .pipe(app.plugins.browsersync.stream());
}
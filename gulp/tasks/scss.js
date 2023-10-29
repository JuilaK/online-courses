import pureSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(pureSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../images/'))
    .pipe(app.plugins.replace(/@fonts\//g, '../fonts/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(
        app.isBuild,
        cleanCss()
    ))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}
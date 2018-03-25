'use strict';
// Gulp.js configuration
const gulp = require('gulp');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const deporder = require('gulp-deporder');
const stripdebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const babel = require('gulp-babel');

// development mode?
const devBuild = (process.env.NODE_ENV !== 'production');
// folders
const folder = {
    src: 'src/',
    build: 'build/'
};

// image processing
gulp.task('images', function () {
    const out = folder.build + 'images/';
    return gulp.src(folder.src + 'images/**/*')
        .pipe(newer(out))
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(out));
});

// JS processing
gulp.task('js', function () {
    const jsbuild = gulp.src(folder.src + 'js/**/*')
        .pipe(deporder())
        .pipe(concat('index.js'))
        .pipe(babel());

    if (!devBuild) {
        jsbuild = jsbuild
            .pipe(stripdebug())
            .pipe(uglify());
    }
    return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});

// CSS processing
gulp.task('css', ['images'], function () {
    const postCssOpts = [
        assets({loadPaths: ['images/']}),
        autoprefixer({browsers: ['last 2 versions', '> 2%']}),
        mqpacker
    ];

    if (!devBuild) {
        postCssOpts.push(cssnano);
    }

    return gulp.src(folder.src + 'scss/index.scss')
        .pipe(sass({
            outputStyle: 'nested',
            imagePath: 'images/',
            precision: 3,
            errLogToConsole: true
        }))
        .pipe(postcss(postCssOpts))
        .pipe(gulp.dest(folder.build + 'css/'));
});

// run all tasks
gulp.task('build', ['css', 'js']);

// watch for changes
gulp.task('watch', function () {
    // javascript changes
    gulp.watch(folder.src + 'js/**/*', ['js']);
    // css changes
    gulp.watch(folder.src + 'scss/**/*', ['css']);
});

gulp.task('default', ['watch', 'build']);

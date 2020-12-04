'use strict';

var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    cleanCSS     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'),
    htmlmin      = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer([
            'last 10 versions'
            ], {
                cascade: true
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('vendors', function() {
    return gulp.src('src/vendors/**/*')
        .pipe(gulp.dest('dist/vendors'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'css', 'scripts', 'vendors'));
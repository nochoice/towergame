var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');

var sources = {
    js: ['./app/**/*.*']
};

gulp.task('watch', function(){
    gulp.watch(sources.js, ['js']);
});

//gulp.task('connect', connect.server({
//    root: ['./app'],
//    open: {browser: 'Google Chrome'}
//}));

gulp.task('js', function(){
    gulp.src('./app/js/app.js')
        .pipe(browserify({
            //insertGlobals : true,
            //debug : !gulp.env.production
        }))
        .pipe(rename('out.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/js/'))
        .pipe(livereload());
});
//
//gulp.task('default', ['watch', 'connect']);





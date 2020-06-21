const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./docs/"
        }
    });
});

gulp.task('styles', function(){
    return gulp.src("./src/sass/*.+(sass|scss)")
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
            }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./docs/css'))
        .pipe(browserSync.stream());
});

gulp.task("watch", function(){
    gulp.watch("./src/sass/**/*.+(sass|scss|css)", gulp.parallel("styles"));
    gulp.watch("./src/*.html", gulp.parallel("html"));
    gulp.watch("./dist/*.html").on("change", browserSync.reload);
    gulp.watch("./src/js/*.js").on("change", browserSync.reload);
});

gulp.task("html", function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./docs'));
})

gulp.task("css", function() {
    return gulp.src('src/css/**/*+(.css|.min.css)')
        .pipe(gulp.dest('./docs/css'));
})

gulp.task("js", function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('./docs/js'));
})

gulp.task("icons", function() {
    return gulp.src('src/icons/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./docs/icons'));
})

gulp.task("img", function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./docs/img'));
})

gulp.task("fonts", function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('./docs/fonts'));
})

gulp.task("php", function() {
    return gulp.src('src/php/**/*')
        .pipe(gulp.dest('./docs/php'));
})

gulp.task("default", gulp.parallel("browser-sync", "styles", "watch", "html", "css", "js", "img", "icons", "fonts",));

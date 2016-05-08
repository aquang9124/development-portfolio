var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Compile SASS
gulp.task('sass', function() {
	return gulp.src('./client/content/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./client/content/css'));
});

// Concatenate JS Files
gulp.task('scripts', function() {
	return gulp.src(['./client/app/app.module.js', './client/app/*.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./client/app'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('./client/app/*.js', ['scripts']);
	gulp.watch('./client/content/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);
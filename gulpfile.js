var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	mqPacker = require('css-mqpacker'),
	sortMQ = require('sort-css-media-queries'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	browserSync = require('browser-sync'),
	image = require('gulp-image');

gulp.task('sass', function() {
	return gulp.src('project/app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([
				mqPacker({
					sort: sortMQ
				})
			]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('project/dist/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function() {
	return gulp.src('project/app/*.html')
		.pipe(gulp.dest('project/dist'));
});

gulp.task('img', function(){
	return gulp.src('project/app/img/**/*.{png,jpg}')
		.pipe(image())
		.pipe(gulp.dest('project/dist/img'))

});

gulp.task('js', function() {
	return gulp.src('project/app/js/**/*.js')
		.pipe(gulp.dest('project/dist/js'));
});



gulp.task('font', function(){
	return gulp.src('project/app/font/**/*')
	.pipe(gulp.dest('project/dist/font'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir:'project/dist'
		},
		notify: false
	});



	gulp.watch('project/app/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('project/app/*.html', gulp.series('html'))
		.on('change', browserSync.reload);
	gulp.watch('project/app/js/**/*.js', gulp.series('js'))
		.on('change', browserSync.reload);
});

gulp.task('watch', gulp.series('html', 'sass', 'img', 'font', 'js', 'browser-sync'));
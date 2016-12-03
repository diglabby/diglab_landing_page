const http = require('http');
const st = require('st');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');

// build configurations
const buildPath = __dirname + '/build/';
const assetsPath = buildPath + 'assets/';

// src configurations
const src = __dirname + '/_/';
const cssSrc = src + 'css/**/*.css';
const htmlSrc = src + 'html/**/*.html';
const jsSrc = [src + 'js/jquery.js', src + 'js/bootstrap.js', src + 'js/diglab.js'];

gulp.task('css', function () {
	return gulp.src(cssSrc)
		.pipe(
			cleanCSS(
				{debug: true},
				function(details) {
					console.log(`[css-minify]: ${details.name}`);
					console.log(`\tbefore:\t` + details.stats.originalSize);
					console.log(`\tafter:\t`+ details.stats.minifiedSize);
				})
		)
		.pipe(concat('it.falanster.css'))
		.pipe(gulp.dest(assetsPath))
		.pipe(livereload());
});

gulp.task('html', function() {
	return gulp.src(htmlSrc)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(buildPath))
		.pipe(livereload());
});

gulp.task('js', function() {
	return gulp.src(jsSrc)
		.pipe(concat('it.falanster.js'))
		.pipe(uglify())
		.pipe(gulp.dest(assetsPath))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen({ basePath: buildPath });

	gulp.watch(cssSrc, ['css']);
	gulp.watch(htmlSrc, ['html']);
	gulp.watch(jsSrc, ['js']);
});

gulp.task('server', function(done) {
	http.createServer(
		st({ path: __dirname + '/build', index: 'index.html', cache: false })
	).listen(8080, done);
});

gulp.task('build', ['css', 'html', 'js']);

gulp.task('dev-server', ['build', 'watch', 'server']);

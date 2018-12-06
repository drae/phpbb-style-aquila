'use strict'

import aliasify from 'aliasify'
import babelify from 'babelify'
import browserify from 'browserify'
import del from 'del'
import es from 'event-stream'
import glob from 'glob'
import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import babel from 'gulp-babel'
import cache from 'gulp-cache'
import concat from 'gulp-concat'
import cssnano from 'gulp-cssnano'
import decompress from 'gulp-decompress'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import watch from 'gulp-watch'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import sassimporter from 'node-sass-tilde-importer'

/**
 *
 */
const paths = {
	sass: [
		'src/styles/aquila/scss/**/*.scss',
		'node_modules/font-awesome/scss/font-awesome.scss'
	],
	cssVendor: [
		'node_modules/font-awesome-animation/dist/font-awesome-animation.css',
		'node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css'
	],
	sassInclude: [
		'node_modules/bootstrap/scss',
		'node_modules/font-awesome/scss'
	],
	jsVendor: [
		'node_modules/jquery/dist/jquery.js',
		'node_modules/popper.js/dist/umd/popper.js',
		'node_modules/waypoints/lib/jquery.waypoints.js',
		'node_modules/bootstrap/dist/js/bootstrap.js',
	],
	fonts: [
		'src/styles/aquila/fonts/*',
		'node_modules/font-awesome/fonts/*'
	],
	images: [
		'src/styles/aquila/img/**'
	],
	templates: [
		'src/styles/aquila/template/**'
	],
	projectCss: [
		'src/styles/aquila/css/*.css'
	],
	projectJs: [
		'src/styles/aquila/js/*.js'
	]
}

const dest = {
	fileStyleSheet: 'stylesheet.min.css',
	cssVendor: 'vendor.min.css',

	css: 'html/styles/aquila/theme/',
	fonts: 'html/styles/aquila/fonts/',
	templates: 'html/styles/aquila/template/',
	images: 'html/styles/aquila/theme/images/',

	jsPathVendor: 'html/styles/aquila/js/'
}

/**
 * Cleanup
 */
gulp.task('clean:extensions', () => {
	return del(['html/cache/production', 'html/ext/numeric'])
})

const gulp = require("gulp");
const sass = require("gulp-sass");

// Compile SCSS into CSS
function style() {
	// 1. Where is scss file
	return (
		gulp
			.src("./src/scss/*.scss")
			// 2. Pass file through sass compiler
			.pipe(sass())
			// 3. Where do i save the compiled CSS
			.pipe(gulp.dest("./dist/styles"))
	);
}

function watch() {
	gulp.watch("./src/scss/*.scss", style);
	gulp.watch("./src/js/*.js");
	gulp.watch("./*.php");
}

exports.style = style;
exports.watch = watch;

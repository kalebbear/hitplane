

var gulp =require("gulp");
var uglify =require("gulp-uglify");
var babel=require("gulp-babel");

gulp.task("jstask",function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets":["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest('js/dest'))
});

gulp.task('default',['jstask']); 
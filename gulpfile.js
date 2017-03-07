/**
 * Created by vinod.khandelwal on 21-08-2016.
 */
var gulp  = require("gulp");
var jshint = require('gulp-jshint');

var nodemon = require('gulp-nodemon');

var jsfiles = ['*.js'];

gulp.task('style', function () {
   return gulp.src(jsfiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('serve', ['style'],function () {
   var option = {
      script: 'app.js',
      delayTime: 1,
      env: {
         'PORT': 5000
      },
      watch: jsfiles
   }

   return nodemon(option)
       .on('restart', function (ev) {
          console.log("Restarting...");
       });
});
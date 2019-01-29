var gulp = require('gulp'),
    sass = require('gulp-sass');

// gulp.task('sass', function(){
//   return gulp.src('source-files')
//     .pipe(plugin())
//     .pipe(gulp.dest('folder'))
// })

gulp.task('sass', ()=>{
  return gulp.src('src/**/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('src'))
})

gulp.task('watch', ()=>{
  gulp.watch('src/**/*.sass', gulp.series('sass'));
})
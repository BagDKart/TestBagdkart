let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

// gulp.task('default', function() {
//   // place code for your default task here
// });

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js'
    }).on('restart', function () {
        gulp.run(['scripts', 'lint']);
    });
});
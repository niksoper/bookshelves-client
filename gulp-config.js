module.exports = (function() {
    
    var buildRoot = './build/';
    
    var config = {
        source: {
            sassMain: './scss/app.scss',
            sassFiles: './scss/**/*.scss'
        },
        build: {
            root: buildRoot,
            allCss: 'bookshelves.min.css'
        },
        watchTasks: ['sass'],
        sass: {
            includePaths: ['bower_components/foundation/scss']
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    };
        
    return config;
})();
const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const webpackStream = require('webpack-stream');
const connect = require('gulp-connect');
const size = require('gulp-size');
const uglify = require('gulp-uglify');
const del = require('del');
const critical = require('critical');


var $ = require('gulp-load-plugins')({
    pattern: '*',
});

var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js')[environment];


var port = $.util.env.port || 1337;
var dev = 'src/';
var dist = 'dist/';

var autoprefixerBrowsers = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 5',
    'opera >= 12',
    'ios >= 6',
    'android >= 4.0',
    'bb >= 10'
];


// SCSS bundled into CSS task
function css() {
  return src(dev + 'styles/main.scss')
  .pipe(sass({
      outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(prefix({
      browsers: autoprefixerBrowsers
  }))
  .pipe(dest(dist + 'css/'))
  .pipe(size({
      title: 'css'
  }))
  .pipe(connect.reload());
}

// JS bundled into min.js task
function js() {
    return src(webpackConfig.entry)
    .pipe(webpackStream(webpackConfig))
    .pipe(uglify())
    .pipe(dest(dist + 'js/'))
    .pipe(size({
        title: 'js'
    }))
    .pipe(connect.reload());
}

function html() {
    return src(dev +  'index.html')
    .pipe(dest(dist))
    .pipe(size({
        title: 'html'
    }))
    .pipe(connect.reload());
}

function serve() {
    connect.server({
        root: dist,
        port: port,
        livereload: {
            port: 35728
        }
    });

}

function staticFiles() {
    return src(dev +  'static/**/*')
    .pipe(size({
        title: 'static'
    }))
    .pipe(dest(dist + 'static/'));
}

function rootFiles() {
    return src(dev +  '*.pdf')
    .pipe(size({
        title: 'root-files'
    }))
    .pipe(dest(dist));
}

function rootIcons() {
    return src(dev +  '*.{ico,png}')
    .pipe(size({
        title: 'root-icons'
    }))
    .pipe(dest(dist));
}

function criticalFiles() {
    critical.generate({
        inline: true,
        base: 'dist/',
        src: 'index.html',
        dest: 'dist/index.html',
        minify: true,
        width: 320,
        height: 480
    });
}

function lint() {
    return src(['src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.formatEach('compact', process.stderr));
}

function watchFiles() {
    watch(dev +  'styles/**/*.scss', parallel(css));
    watch(dev +  'index.html', parallel(html));
    watch([dev +  'scripts/**/*.js'], parallel(lint, js));
}

function clean(cb) {
    del([dist], cb);
}

const build = series(clean, parallel(staticFiles, rootFiles, rootIcons, html, js, css));

exports.default = parallel(build, serve, watchFiles);
exports.build = build;

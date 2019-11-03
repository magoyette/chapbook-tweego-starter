# Chapbook Tweego Starter

A starter project for the [Chapbook](https://github.com/klembot/chapbook) Twine story format Chapbook. It uses the compiler [Tweego](https://www.motoslave.net/tweego/).

The [Poof](https://github.com/ChapelR/poof) story format is used for proofing.

This project is a work in progress and has only been tested on Linux.

## Installation

The project can be installed by executing the following commands.

``` shell
# Install the dependencies with NPM
npm install

# Downloads Chapbook, Tweego and Poof
npm run download
```

## Build

The project can be built with the `build` script.

``` shell
# Run Webpack, then Tweego with the Chapbook story format
npm run build

# Starts a server with live reload on the Chapbook HTML file
npm run start
```

### Watching for changes with live reload

Watching changes to JavaScript, SASS, SCSS or CSS files requires starting Webpack in watch mode in a dedicated shell.

``` shell
npm run watch:webpack
```

Watching changes on the Twee files requires starting Tweego in watch mode. Tweego will also detect the changes on the files built with Webpack (JavaScript and CSS files). Tweego in watch mode also requires a dedicated shell.

``` shell
npm run watch:chapbook
```

A server that will detect changes and reload them automatically can be opened in its own shell.

``` shell
npm run start
```

## Proofing

A build with the Poof story format can be done with the `poof` script.

Unlike the Chapbook build, the Poof build doesn't execute Webpack.

``` shell
# Run Webpack, then Tweego with the Poof story format
npm run poof

# Starts a server with live reload on the Poof HTML file
npm run start:poof
```

It's also possible to watch for changes with Poof by using `watch:poof` instead of `poof`.

``` shell
# Run Webpack, then Tweego with the Poof story format
npm run watch:poof

# Starts a server with live reload on the Poof HTML file
npm run start:poof
```

## Tools

### Webpack

[webpack](https://github.com/webpack/webpack) is used to bundle SASS, CSS and JavaScript files.

The JavaScript bundle uses the file `./src/scripts/index.js` as its entry and will generate the bundled file `scripts.bundle.js`.

The CSS bundle uses the file `./src/styles/styles.scss` as its entry and will generate the bundled file `styles.bundle.css`.

### Babel

Babel transpile and minimize the JavaScript files. Babel is configured to support the browsers defined from the `browserslist` in `package.json`.

### ESLint

JavaScript files are linted with [ESLint](https://eslint.org).

### Node Sass

[node-sass](https://github.com/sass/node-sass) is used to convert SASS and SCSS files to CSS files.

### Stylelint

CSS, SASS and SCSS fiels are linted with Stylelint.

The Stylelint plugin `stylelint-no-unsupported-browser-features` is used to support the `browserslist` in `package.json`.

### Autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) adds vendor prefixes to the CSS rules.

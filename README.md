# Chapbook Tweego Builder

A project for the [Chapbook](https://github.com/klembot/chapbook) Twine/Twee story format Chapbook. It uses the compiler [Tweego](https://www.motoslave.net/tweego/) to build stories.

**Features**

- Build [Chapbook](https://github.com/klembot/chapbook) stories with the [Tweego](https://www.motoslave.net/tweego/) compiler
- Proof stories with the [Poof](https://github.com/ChapelR/poof) story format
- CSS files are linted by [Stylelint](https://stylelint.io/) and vendor prefixes are added by [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Sass](https://sass-lang.com/) can be used instead of CSS
- JavaScript files are linted with [ESLint](https://eslint.org) and minimized with Babel
- Live reload in the browser when files are changed
- Build many stories with a single Node project

**Warning**

This project is a work in progress and has only been tested on Linux. If you're not familiar with Node and Webpack, it might be better to take a look at [tweego-installer](https://github.com/ChapelR/tweego-installer) and [tweego-setup](https://github.com/ChapelR/tweego-setup).

**FAQ**

Is there a reason why this project is specific to the Chapbook story format?

I only write Twine/Twee stories with Chapbook, so this project is only tested with Chapbook.

**Table of contents*

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Build](#build)
  - [Watching for changes with live reload](#watching-for-changes-with-live-reload)
- [Proofing](#proofing)
- [Working with multiple stories](#working-with-multiple-stories)
  - [Switching between stories](#switching-between-stories)
- [Tools](#tools)
  - [Webpack](#webpack)
  - [Babel](#babel)
  - [ESLint](#eslint)
  - [Node Sass](#node-sass)
  - [Stylelint](#stylelint)
  - [Autoprefixer](#autoprefixer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Working with multiple stories

Multiple stories support allows to use Chapbook Tweego Builder to build multiple stories.

That's useful if you want to store each story in a distinct Git repository, but keep using a single Node project to build them.

Here's an example of a structure with many stories:

- stories (folder ignored by the Git repository of chapbook-tweego-starter)
  - story1 (the Git repository of a story)
    - scripts
    - styles
    - twee
  - story2 (the Git repository of another story)
    - scripts
    - styles
    - twee
- src (default story provided with chapbook-tweego-starter)

The `stories` folder is configured to be ignored by the Git repository of chapbook-tweego-starter. The stories can be stored under `stories` each in their own repository.

The `src` folder is used by default by Chapbook Tweego Builder. That example story is used for the purpose of testing Chapbook Tweego Builder.

### Switching between stories

The `switch` goal allows to configure which story should be built with chapbook-tweego-starter. Only one story can be built at a time.

The argument passed to `npm run switch` is the path to the root folder of the story. That path must contains 3 subfolders: `scripts`, `styles` and `twee`.

``` shell
# Switch the current story to story1
npm run switch stories/story1

# Switch the current story to story2
npm run switch stories/story2

# Run goals like usual
npm run build
```

That goal will set a NPM config variable named `chapbook-tweego-starter:storyPath` in the file `~/.npmrc`. That will override the variable `storyPath` in the `config` object of `package.json`. `storyPath` is set by default to `src`, which is the example story of Chapbook Tweego Builder.

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

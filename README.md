## Kreation.io React App
The app loads and displays forum topics via JSON API based on tab selection. Used as submodule in the [Landing Page](https://github.com/DannyFischer/hey.kreation.io) Middleman project. Tabs and Sources are configured in `webpack_app.js`.

Modular written in ES6 and compiled with Babel and Webpack.

---

### Application Structure

`components/` The React community components.

`webpack_app.js` React App configuration, supplies the tabs and JSON sources.

`webpack.config.js` Webpack configuration.

`app.js` Contains a reference to the bundled JavaScript for Middleman’s asset pipeline / build process.

`webpack.production.js` The bundled, production ready app.

----

### Usage
This repository is intended for use as a [git-submodule](http://git-scm.com/docs/git-submodule) as part of the [main project](https://github.com/DannyFischer/hey.kreation.io).

`git clone --recursive https://github.com/DannyFischer/hey.kreation.io.git && cd hey.kreation.io`

`npm install` — Install all the dependencies.

`npm run webpack` — Webpack task to watch and recompile when changes are detected.

![](https://cloud.githubusercontent.com/assets/3680694/11577134/c4c280f6-9a1b-11e5-9181-7dafb805411a.gif)

----

### Notes

Webpack is configured for production ready output, Node is set to `NODE_ENV: production` to reduce the library size of React (and others). This increases the compilation time significant.

### Kreation.io Landing Page React App (Middleman Submodule)
The React App loads and displays community topics via JSON API based on tab selection.
Modular written in ES6 and compiled with Babel and Webpack.


#### Application Structure

`components/` The React community components.

`webpack_app.js` React App configuration, supplies the tabs and JSON sources.

`webpack.config.js` Webpack configuration.

`app.js` Contains a reference to the bundled JavaScript for Middleman’s asset pipeline / build process.

`webpack.production.js` The bundled, production ready app.

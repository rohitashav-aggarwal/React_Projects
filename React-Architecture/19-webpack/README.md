19-webpack is an independent package and has it's own config files (such as package.json).
The goal in this package is to learn webpack to do following items:
1) Transform your JSX files into JS files: babel-loader, babel-core, and babelpreset-
react (Before we were running npm run buildXX to transpile jsx to js).
2) Load CSS via require and resolve url and imports in the process with cssloader
(https://github.com/webpack/css-loader)
3) Add CSS by injecting the <style> element with style-loader
(https://github.com/webpack/style-loader)
4) Bundle all the resulting JS files into one file called bundle.js
5) Provide the proper source code–line mapping in DevTools via source maps

Webpack config file: webpack.config.js

Dev Server: Using Node static-server or your favorite web server to check your web-app.
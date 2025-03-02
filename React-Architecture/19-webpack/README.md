19-webpack is an independent package and has it's own config files (such as package.json). <br>
The goal in this package is to learn webpack to do following items: <br>
1) Transform your JSX files into JS files: babel-loader, babel-core, and babelpreset-
react (Before we were running npm run buildXX to transpile jsx to js). <br>
2) Load CSS via require and resolve url and imports in the process with cssloader
(https://github.com/webpack/css-loader) <br>
3) Add CSS by injecting the <style> element with style-loader
(https://github.com/webpack/style-loader) <br>
4) Bundle all the resulting JS files into one file called bundle.js <br>
5) Provide the proper source code–line mapping in DevTools via source maps <br>

Webpack config file: webpack.config.js <br>
Dev Server: Using Node static-server or your favorite web server to check your web-app. <br>
Running webpack: npm run build <br>
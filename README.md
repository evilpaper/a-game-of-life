# Game of Life

A Game of Life implementation.

## About this project

This project presents a TypeScript implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). It's developed using a Test-Driven Development (TDD) approach, employing a minimal "vanilla" TypeScript setup.

## Setup overview

This project prioritizes simplicity. The outcome should consist of a single HTML file, a few JavaScript module files, and a stylesheet. There's no need for bundled production builds, pre-processors, post-processors, minifying, or any additional features provided by modern frontend build tools like Babel, Webpack, or Vite.

It includes Typescript support and a setup designed for easy writing and running of unit tests. This ensures a smoother developer experience and enables adherence to best practices without the need for extensive tooling configurations.

## Build tools

This minimal setup requires two build tools:

- typescript: for Typescript compilation
- jest: for Jest unit tests

To ensure robust TypeScript support during unit testing, the following additional packages are utilized:

- ts-jest: allows Jest to test source code written in Typescript
- @types/jest: provides Typescript types for Jest unit tests

## Folder structure

The folder structure for this project follows a simple layout:

- dist: Contains the final production build (further details below).
- src: Holds the source files.
- tests: Contains the unit tests.
- Project Root: Includes the package.json files, TypeScript configuration files, and Jest configuration file.

## Skeleton HTML and Javascript files

To assemble everything, a skeleton JavaScript file is created inside the src subfolder. This serves as the main entry point for the application.

src/index.ts: With TypeScript setup, this file will compile into dist/index.js.

To utilize the compiled JavaScript file, a basic index.html file is included in the dist folder:

dist/index.html: Ensure the type="module" attribute is set, allowing module imports within the index JavaScript file. This facilitates the organization of source code into easily maintainable and testable modules.

Modules work only via HTTP(s), not locally.

It's important to note that modules function only via HTTP(s), not locally. When attempting to open a web page locally via the file:// protocol, import/export directives won't function. Instead, utilize a local web server, such as static-server, or leverage the "live server" capability of your editor, such as the VS Code Live Server Extension, to test modules.

As a final "hack" you also have to manually add .js to complied output.

## Running local

Clone, npm install, run test and or run build and open index.html with a local web-server as outlined above.

## License

Licensed under the MIT license.

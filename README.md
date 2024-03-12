# Game of Life

A Game of Life written in TypeScript using a TDD approach. Tried to keep the setup as simple as possible. No build tools. Have some consequences.

To use the compiled Javascript file, I include a bare-bones index.html file in the dist folder:

The important thing to note here is the type="module" identifier. This allows you to use module imports within your index Javascript file. You can separate source code into modules that are easy to maintain and easy to unit test.

Modules work only via HTTP(s), not locally.

If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work. Use a local web-server, such as static-server or use the “live server” capability of your editor, such as VS Code Live Server Extension to test modules.

Use .js while importing in ts

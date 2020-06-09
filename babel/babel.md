# Babel

- Babel - A JavaScript complier

  - need plugin, preset to tell babel which rules should be followed

    

> Why do we need _Babel_
>
> - Convert ES6, ES7 down to ES5
> - Convert JSX to ES5

#### Official Presets

- env
- react

#### Relating Packages

- babel-cli
  - give access to a command line interface to use babel complier

#### Presets

- A groups of plugins that babel uses for its translation

#### Install

- use cnpm to guarentee speed
- `cupm init`
- `cnpm install --save-dev babel-cli` 安装babel command line interface
- `node-module/.bin/babel --help`
- `cnpm install --save-dev babel-preset-env babel-preset-react` 安装两个presets
- `node_modules/.bin/babel src/app.js --out-file=public/scripts/app.js --presets=env,react`
- OR `node_modules/.bin/babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`


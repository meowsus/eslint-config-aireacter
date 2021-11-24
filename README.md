# eslint-config-aireacter

An eslint-config that makes Airbnb, React, and Prettier get along ok

## Intention

I have gotten accustomed to starting out my JavaScript projects using the Airbnb styleguide. More recently I've been using Prettier to curb the obsession I have with meticulously formatting my code. Unfortunately a few rules shared between Airbnb & Prettier conflict. This repository is here to try to mitigate the issues between both eslint & Prettier and get my projects kicked off right. Hopefully you find it useful as well.

## Installation

This config declares some peer dependencies that should also be installed:

```sh
npm info "eslint-config-aireacter@latest" peerDependencies
```

Typically these commands will satisfy all peer dependencies:

```sh
yarn add --dev eslint-config-aireacter
yarn add --dev eslint prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Now you can extend this config in your `.eslintrc`:

```json
{
  "extends": ["aireacter"]
}
```

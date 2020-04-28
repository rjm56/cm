<h1 align="center">Campaign Monitor UI test</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Prerequisites

node: v10.17

## Install

```sh
npm i
```

## Usage

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit tests

Unit tests are written using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

Run all unit tests:

```bash
npm run test
```

## Linting

This project uses the airbnb eslint [config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Run lint:

```sh
npm run lint
```

## More information

All styling has been done using [Styled Components](https://styled-components.com/).

This project has been bootstrapped with `create-next-app` to ensure it is a 'production ready' example. Next.js provides a number of features such as server side rendering, routing and code splitting 'out of the box'. Further information about the Next.js features and API can be found in the [Next.js Documentation](https://nextjs.org/docs).

## Architectural decisions

While Next.js is opinionated on some structure, such as the 'pages' directory for routing, it leaves all other architectural decisions to the developer.

In this project, component structure is based on the atomic design methodology with atoms, molecules and organisms. This has loosely been based on the principles laid out within this [guide](https://atomicdesign.bradfrost.com/chapter-2/).

## Potential future improvements

- Add a component library tool such as [Storybook](https://storybook.js.org/) to enable code-sharing and an 'at a glance' view of component variations.
- Add feature testing with a library like [Cypress.io](https://www.cypress.io/).
- Add visual regression tests with a tool like [Percy.io](https://percy.io/).

## Author

👤 **Rosie Morris**

- Github: [@rjm56](https://github.com/rjm56)
- LinkedIn: [profile](https://www.linkedin.com/in/rosannamorris/)

![react-page-loading-v2](https://github.com/devzerstudio/react-page-loading-v2/blob/main/images/react-page-loading.png)

# react-page-loading-v2 [![version](https://img.shields.io/npm/v/react-page-loading-v2.svg?style=flat-square)](https://www.npmjs.com/package/react-page-loading-v2) [![downloads](https://img.shields.io/npm/dm/react-page-loading-v2.svg?style=flat-square)](https://www.npmjs.com/package/react-page-loading-v2) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)

React page loading using react functional components to display a loading spin until the page loads completely.

We'd love to have your helping hand on contributions to react-page-loading-v2 by forking and sending a pull request!

<img src="https://github.com/devzerstudio/react-page-loading-v2/blob/main/images/react-page-loading-features.gif" width="67%" alt="react-page-loading-v2 features">

## Features

- Working with react-router-dom

- Working with react-router-redux

- ... etc.

## Installation

### npm

```shell
npm i react-page-loading-v2
```

### yarn

```shell
yarn add react-page-loading-v2
```

## Usage

```
import React, { Component } from 'react'
import Page from 'react-page-loading-v2'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} size={4}>
          <h1>Title</h1>
          <p>content goes here</p>
        </Page>
      </div>
    )
  }
}
```

## Properties

| Name     | Type             | Default value |
| :------- | :--------------- | :------------ |
| loader   | PropTypes.string | bar           |
| color    | PropTypes.string | #A9A9A9       |
| size     | PropTypes.number | 4             |
| duration | PropTypes.number | 1             |

### loader

| Value         |
| :------------ |
| bar           |
| bubble-spin   |
| bubble        |
| comet-spin    |
| cylinder-spin |
| resize-spin   |
| rotate-spin   |
| spin          |

## Contributing

We'd love to have your helping hand on contributions to react-page-loading-v2 by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

## License

MIT License

Copyright (c) 2022 [devzerstudio](https://github.com/devzerstudio), Maintained by [hashaaan](https://github.com/hashaaan)

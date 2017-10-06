# g2-wrapper

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/g2-wrapper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/g2-wrapper
[download-image]: https://img.shields.io/npm/dm/g2-wrapper.svg?style=flat-square
[download-url]: https://npmjs.org/package/g2-wrapper

A higher [G2](https://antv.alipay.com/g2/doc/index.html) wrapper for React.

## Usage

```jsx
import G2Wrapper from 'g2-wrapper';
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    data: [],
    width: 500,
    height: 250,
    plotCfg: {},
    cfgFun: chart => {
      chart.line().position('time*price').color('name').shape('spline').size(2);
    }
  }

  render() {
    return (
      <div>
        <G2Wrapper { ...this.state } />
      </div>
    );
  }
}

```

## License

MIT

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createG2 from 'g2-react';

export default class Wrapper extends Component {
  constructor(props, ...others) {
    super(props, ...others);
    this.Chart = createG2((chart) => {
      if (this.props.cfgFun) {
        this.props.cfgFun(chart);
      }
      chart.render();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reRender || this.props.shape !== nextProps.shape) {
      this.Chart = createG2((chart) => {
        if (nextProps.cfgFun) {
          nextProps.cfgFun(chart);
        }
        chart.render();
      });
    }
  }

  render() {
    return (<this.Chart {...this.props} />);
  }
}

Wrapper.propTypes = {
  cfgFun: PropTypes.func,
  reRender: PropTypes.bool,
  shape: PropTypes.string,
};

Wrapper.defaultProps = {
  cfgFun: () => { },
  reRender: false,
  shape: '',
};

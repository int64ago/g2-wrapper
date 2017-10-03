import React, { Component } from 'react';
import createG2 from 'g2-react';

export default class Wrapper extends Component {
  constructor(props, ...others) {
    super(props, ...others);
    this.Chart = createG2(chart => {
      this.chart = chart;
      this.props.cfgFun && this.props.cfgFun(chart);
      chart.render();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shape !== this.props.shape) {
      this.chart.clear();
      this.props.cfgFun && this.props.cfgFun(chart);
      this.chart.render();
    }
  }

  render() {
    return (<this.Chart { ...this.props } />);
  }
}
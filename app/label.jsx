'use strict';

import React, { Component } from 'react';
import { getType } from './utils/variables';

let labels = {
    button: require('./components/label/button').default,
    default: require('./components/label').default,
};

export default class Label extends Component {
    render() {
        const Field = get(getType.call(this.props));
        return <Field {...this.props} />
    }
}
export const set = _labels => { labels = Object.assign({}, labels, _labels) }
export const get = name => labels[name] ? labels[name] : labels.default;
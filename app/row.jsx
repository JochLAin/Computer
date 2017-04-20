'use strict';

import React, { Component } from 'react';
import { getType } from './utils/variables';

let rows = {
    button: require('./components/row/button').default,
    default: require('./components/row').default,
    hidden: require('./components/row/hidden').default,
    reset: require('./components/row/button').default,
    submit: require('./components/row/button').default,
};

export default class Row extends Component {
    render() {
        const Field = get(getType.call(this.props));
        return <Field {...this.props} />
    }
}
export const set = _rows => { rows = Object.assign({}, rows, _rows) }
export const get = name => rows[name] ? rows[name] : rows.default;
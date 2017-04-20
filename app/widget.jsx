'use strict';

import React, { Component } from 'react';
import { getType } from './utils/variables';

let widgets = {
    compound: require('./components/widget/compound').default,
    collection: require('./components/widget/collection').default,
    repeated: require('./components/row/repeated').default,
    textarea: require('./components/widget/textarea').default,

    button: require('./components/widget/button').default,
    reset: require('./components/widget/button/reset').default,
    submit: require('./components/widget/button/submit').default,

    choice: require('./components/widget/choice').default,
    collapsed: require('./components/widget/choice/collapsed').default,
    expanded: require('./components/widget/choice/expanded').default,

    checkbox: require('./components/widget/input/checkbox').default,
    date: require('./components/widget/input/date').default,
    datetime: require('./components/widget/input/datetime').default,
    dateinterval: require('./components/widget/input/dateinterval').default,
    email: require('./components/widget/input/email').default,
    hidden: require('./components/widget/input/hidden').default,
    file: require('./components/widget/input/file').default,
    integer: require('./components/widget/input/integer').default,
    money: require('./components/widget/input/money').default,
    number: require('./components/widget/input/number').default,
    percent: require('./components/widget/input/percent').default,
    password: require('./components/widget/input/password').default,
    radio: require('./components/widget/input/radio').default,
    range: require('./components/widget/input/range').default,
    search: require('./components/widget/input/search').default,
    text: require('./components/widget/input').default,
    time: require('./components/widget/input/time').default,
    url: require('./components/widget/input/url').default,
};

export default class Widget extends Component {
    render() {
        const Field = get(getType.call(this.props), this.props.vars.compound);
        return <Field {...this.props} />
    }
}

export const set = _widgets => { widgets = Object.assign({}, widgets, _widgets); };
export const get = (name, compound) => widgets[name] ? widgets[name] : (
    compound ? widgets.compound : widgets.button
);

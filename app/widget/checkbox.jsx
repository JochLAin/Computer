'use strict';

import React, { Component } from 'react';

/**
{%- block checkbox_widget -%}
    <input type="checkbox" {{ block('widget_attributes') }}{% if value is defined %} value="{{ value }}"{% endif %}{% if checked %} checked="checked"{% endif %} />
{%- endblock checkbox_widget -%}
 */

import WidgetAttributes from '@components/form/attributes';

export default class Checkbox extends Component {
    render() {
        return <input type="checkbox" {...WidgetAttributes.call(this.props)} value={this.props.vars.value} defaultChecked={this.props.vars.checked} />
    }
}
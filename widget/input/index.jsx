'use strict';

import React, { Component } from 'react';

/**
{%- block form_widget_simple -%}
    {%- set type = type|default('text') -%}
    <input type="{{ type }}" {{ block('widget_attributes') }} {% if value is not empty %}value="{{ value }}" {% endif %}/>
{%- endblock form_widget_simple -%}
 */

import WidgetAttributes from '@components/form/attributes/widget';

export default class Input extends Component {
    render() {
        const prefixes = this.props.vars.block_prefixes;
        const type = this.props.vars.type || prefixes[prefixes.length - 2] || 'text';
        return <input ref="input" type={type} {...WidgetAttributes.call(this.props)} />
    }
}
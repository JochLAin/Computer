'use strict';

import React, { Component } from 'react';

/**
{%- block form_widget_simple -%}
    {%- set type = type|default('text') -%}
    <input type="{{ type }}" {{ block('widget_attributes') }} {% if value is not empty %}value="{{ value }}" {% endif %}/>
{%- endblock form_widget_simple -%}
 */

import WidgetAttributes from '@components/form/attributes/widget';

export default class Widget extends Component {
    render() {
        const { attr, block_prefixes, full_name, id, label, name, required, value } = this.props.vars;
        const type = this.props.vars.type || block_prefixes[block_prefixes.length - 2] || 'text';

        return <input ref="input" type={type} {...WidgetAttributes.call(this)} defaultValue={value} />
    }
}
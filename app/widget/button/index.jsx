'use strict';

import React, { Component } from 'react';

/**
{%- block button_widget -%}
    {%- if label is empty -%}
        {%- if label_format is not empty -%}
            {% set label = label_format|replace({
                '%name%': name,
                '%id%': id,
            }) %}
        {%- else -%}
            {% set label = name|humanize %}
        {%- endif -%}
    {%- endif -%}
    <button type="{{ type|default('button') }}" {{ block('button_attributes') }}>{{ translation_domain is same as(false) ? label : label|trans({}, translation_domain) }}</button>
{%- endblock button_widget -%}
 */

import ButtonAttributes from '@components/form/attributes/button';

export function format() {
    return this.props.vars.label_format
        .replace('%name%', name)
        .replace('%id%', id)
}

export default class Button extends Component {
    render() {
        const { id, name, type } = this.props.vars;
        let { label } = this.props.vars;
        if (!label) {
            if (!this.props.vars.label_format) label = name
            else label = format.call(this);
        }
        return <button {...ButtonAttributes.call(this.props,  {type: type || 'button'})}>{label}</button>
    }
}
'use strict';

import React, { Component } from 'react';

/**
{%- block form_label -%}
    {% if label is not same as(false) -%}
        {% if not compound -%}
            {% set label_attr = label_attr|merge({'for': id}) %}
        {%- endif -%}
        {% if required -%}
            {% set label_attr = label_attr|merge({'class': (label_attr.class|default('') ~ ' required')|trim}) %}
        {%- endif -%}
        {% if label is empty -%}
            {%- if label_format is not empty -%}
                {% set label = label_format|replace({
                    '%name%': name,
                    '%id%': id,
                }) %}
            {%- else -%}
                {% set label = name|humanize %}
            {%- endif -%}
        {%- endif -%}
        <label{% if label_attr %} {% with { attr: label_attr } %}{{ block('attributes') }}{% endwith %}{% endif %}>{{ translation_domain is same as(false) ? label : label|trans({}, translation_domain) }}</label>
    {%- endif -%}
{%- endblock form_label -%}
 */

import Attributes, { set } from '@components/form/attributes';
export function format() {
    this.props.vars.label_format
        .replace('%name%', this.props.vars.name)
        .replace('%id%', this.props.vars.id)
};

export default class Label extends Component {
    render() {
        let { id, label, label_attr } = this.props.vars;
        if (this.props.vars.label !== false) {
            if (!this.props.vars.compound) 
                label_attr = Object.assign({}, label_attr, { for: id });
            if (this.props.vars.required) 
                label_attr = Object.assign({}, label_attr, { class: `${label_attr.class} required` });
            if (!this.props.vars.label)
                if (this.props.vars.label_format) label = format.call(this)
                else label = name;
        }

        console.log(set.call(this, label_attr));
        return <label {...Attributes.call(set.call(this, label_attr))}>
            {label}
        </label>
    }
}
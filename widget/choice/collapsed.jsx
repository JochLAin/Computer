'use strict';

import uuid from 'uuid';
import React, { Component } from 'react';

/**
{%- block choice_widget_options -%}
    {% for group_label, choice in options %}
        {%- if choice is iterable -%}
            <optgroup label="{{ choice_translation_domain is same as(false) ? group_label : group_label|trans({}, choice_translation_domain) }}">
                {% set options = choice %}
                {{- block('choice_widget_options') -}}
            </optgroup>
        {%- else -%}
            <option value="{{ choice.value }}"{% if choice.attr %} {% set attr = choice.attr %}{{ block('attributes') }}{% endif %}{% if choice is selectedchoice(value) %} selected="selected"{% endif %}>{{ choice_translation_domain is same as(false) ? choice.label : choice.label|trans({}, choice_translation_domain) }}</option>
        {%- endif -%}
    {% endfor %}
{%- endblock choice_widget_options -%}

{%- block choice_widget_collapsed -%}
    {%- if required and placeholder is none and not placeholder_in_choices and not multiple and (attr.size is not defined or attr.size <= 1) -%}
        {% set required = false %}
    {%- endif -%}
    <select {{ block('widget_attributes') }}{% if multiple %} multiple="multiple"{% endif %}>
        {%- if placeholder is not none -%}
            <option value=""{% if required and value is empty %} selected="selected"{% endif %}>{{ placeholder != '' ? (translation_domain is same as(false) ? placeholder : placeholder|trans({}, translation_domain)) }}</option>
        {%- endif -%}
        {%- if preferred_choices|length > 0 -%}
            {% set options = preferred_choices %}
            {{- block('choice_widget_options') -}}
            {%- if choices|length > 0 and separator is not none -%}
                <option disabled="disabled">{{ separator }}</option>
            {%- endif -%}
        {%- endif -%}
        {%- set options = choices -%}
        {{- block('choice_widget_options') -}}
    </select>
{%- endblock choice_widget_collapsed -%}
 */

import Attributes from '@components/form/attributes';
import Label from '@components/form/label';
import WidgetAttributes from '@components/form/attributes/widget';
import Widget from '@components/form/widget';

const O2A = (object) => {
    if (!object) return [];
    if (object instanceof Array) return object;

    let array = [];
    for (let key in object) array.push(object[key]);
    return array;
};

export default class Collapsed extends Component {
    render() {
        const { choices, multiple, placeholder, preferred_choices, placeholder_in_choices, separator, value } = this.props.vars;
        let { required } = this.props.vars;
        const { size } = this.props.vars.attr;
        const _group = choice => {
            if (choice.length == undefined) return _option(choice);
            return <optgroup key={uuid.v4()}>{choice.map(preference => _option(preference))}</optgroup>
        }
        const _option = choice => {
            return <option key={uuid.v4()} value={choice.value} {...Attributes.call(this.props,  choice.attr)}>
                {choice.label}
            </option> 
        }

        if (required && !placeholder && !placeholder_in_choices && !multiple && (!size || size <= 1)) required = false;

        return <select {...WidgetAttributes.call(this.props, { required })} multiple={multiple} defaultValue={value}>
            { placeholder && (
                <option value="">{placeholder}</option>
            )}
            { O2A(preferred_choices).map(_group)}
            { preferred_choices.length > 0 && separator && (
                <option disabled={true}>{separator}</option>
            )}
            { O2A(choices).map(_group)}
        </select>
    }
}
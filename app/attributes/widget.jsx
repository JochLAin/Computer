'use strict';

/**
{%- block widget_attributes -%}
    id="{{ id }}" name="{{ full_name }}"
    {%- if disabled %} disabled="disabled"{% endif -%}
    {%- if required %} required="required"{% endif -%}
    {%- for attrname, attrvalue in attr -%}
        {{- " " -}}
        {%- if attrname in ['placeholder', 'title'] -%}
            {{- attrname }}="{{ translation_domain is same as(false) ? attrvalue : attrvalue|trans({}, translation_domain) }}"
        {%- elseif attrvalue is same as(true) -%}
            {{- attrname }}="{{ attrname }}"
        {%- elseif attrvalue is not same as(false) -%}
            {{- attrname }}="{{ attrvalue }}"
        {%- endif -%}
    {%- endfor -%}
{%- endblock widget_attributes -%}
 */

import attributes from './index';

export default function widget_attributes(attr) {
    const { disabled, id, full_name, required } = this.vars;
    return Object.assign({}, { disabled, id, name: full_name, required }, attributes.call(this, attr));
}
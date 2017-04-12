'use strict';

/**
{%- block button_attributes -%}
    id="{{ id }}" name="{{ full_name }}"{% if disabled %} disabled="disabled"{% endif -%}
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
{%- endblock button_attributes -%}
 */

import attributes from './index';

export default function button_attributes(attr) {
    const { disabled, id, full_name } = this.vars;
    return Object.assign({}, { disabled, id, name: full_name }, attributes.call(this, attr));
}
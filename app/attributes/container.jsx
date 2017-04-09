'use strict';

/**
{%- block widget_container_attributes -%}
    {%- if id is not empty %}id="{{ id }}"{% endif -%}
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
{%- endblock widget_container_attributes -%}
 */

import attributes from 'index';

export default function container_attributes(attr) {
    const { id } = this.vars;
    return Object.assign({}, { id }, attributes.call(this, attr));
}
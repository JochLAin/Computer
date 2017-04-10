'use strict';

/**
{% block attributes -%}
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
{%- endblock attributes -%}
 */

export function get() {
    let attr = {};
    if (!this.vars) return attr; 
    Object.keys(this.vars.attr).map((key, index, attributs) => {
        if (["placeholder", "title"].indexOf(key) != -1) {
            // TODO: translate with StoneJS
            attr[key] = attributes[key];
        } else if (["class", "for", "value"].indexOf(key) != -1) {
            if (key == "class") attr.className = attributes.class;
            else if (key == "for") attr.htmlFor = attributes.for;
            else if (key == "value") attr.defaultValue = attributes.value;
        } else if (attributs[key] === true) {
            attr[key] = key;
        } else if (attributs[key]) {
            attr[key] = attributs[key];
        }
    });
    return attr;
};

export function set(attr) {
    return Object.assign({}, this, {
        vars: Object.assign({}, this.vars, {
            attr: Object.assign({}, this.vars.attr, attr)
        })
    });
}

export default function attributes(attr) {
    return get.call(set.call(this, attr));
}
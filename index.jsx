'use strict';

import React, { Component } from 'react';

/**
{%- block form_start -%}
    {% set method = method|upper %}
    {%- if method in ["GET", "POST"] -%}
        {% set form_method = method %}
    {%- else -%}
        {% set form_method = "POST" %}
    {%- endif -%}
    <form name="{{ name }}" method="{{ form_method|lower }}"{% if action != '' %} action="{{ action }}"{% endif %}{% for attrname, attrvalue in attr %} {{ attrname }}="{{ attrvalue }}"{% endfor %}{% if multipart %} enctype="multipart/form-data"{% endif %}>
    {%- if form_method != method -%}
        <input type="hidden" name="_method" value="{{ method }}" />
    {%- endif -%}
{%- endblock form_start -%}

{%- block form_end -%}
    {%- if not render_rest is defined or render_rest -%}
        {{ form_rest(form) }}
    {%- endif -%}
    </form>
{%- endblock form_end -%}
 */

import Attributes from '@components/form/attributes';
import Rest from '@components/form/rest';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { action } = this.props.vars;
        let method = this.props.vars.method.toUpperCase();
        let form_method = 'POST';
        if(['GET', 'POST'].indexOf(method) != -1) form_method = method;

        return <form method={method} action={action} {...Attributes.call(this.props)} encType={this.props.vars.multipart && 'multipart/form-data'}>
            { form_method != method && (
                <input type="hidden" name="_method" value={method} />
            )}
            <Rest {...this.props} rendered={this.state.rendered} />
        </form>
    }
}
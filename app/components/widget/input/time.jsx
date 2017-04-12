'use strict';

import React, { Component } from 'react';

/**
{%- block time_widget -%}
    {%- if widget == 'single_text' -%}
        {{ block('form_widget_simple') }}
    {%- else -%}
        {%- set vars = widget == 'text' ? { 'attr': { 'size': 1 }} : {} -%}
        <div {{ block('widget_container_attributes') }}>
            {{ form_widget(form.hour, vars) }}{% if with_minutes %}:{{ form_widget(form.minute, vars) }}{% endif %}{% if with_seconds %}:{{ form_widget(form.second, vars) }}{% endif %}
        </div>
    {%- endif -%}
{%- endblock time_widget -%}
 */

import ContainerAttributes from '../../../utils/attributes/container';
import { set } from '../../../utils/attributes';
import Widget, { get } from '../../../widget';

export default class Time extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = get('text');
            return <Input {...this.props} />
        } 

        const attr = this.props.vars.widget == 'text' ? { size: 1 } : {};
        return <article {...ContainerAttributes.call(this.props)}>
                <Widget {...set.call(this.props.children.hour, attr)} />
                { this.props.vars.with_minutes && <span>: <Widget {...set.call(this.props.children.minute, attr)} /></span> }
                { this.props.vars.with_seconds && <span>: <Widget {...set.call(this.props.children.second, attr)} /></span> }
        </article>
    }
}
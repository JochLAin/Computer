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

import Input from 'index';
import Widget from '../index';
import { set } from '../../attributes';
import ContainerAttributes from '../../attributes/container';

export default class Time extends Component {
    render() {
        if (widget == 'single_text') return <Input {...this.props} />
        const attr = widget == 'text' ? { size: 1 } : {};
        return <article {...ContainerAttributes.call(this.props)}>
                    <Widget {...set(this.props.children.hour, attr)} />
                    { with_minutes && <span>: <Widget {...set(this.props.children.minute, attr)} /></span> }
                    { with_seconds && <span>: <Widget {...set(this.props.children.second, attr)} /></span> }
            </article>
    }
}
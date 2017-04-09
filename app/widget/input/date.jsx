'use strict';

import React, { Component } from 'react';

/**
{%- block date_widget -%}
    {%- if widget == 'single_text' -%}
        {{ block('form_widget_simple') }}
    {%- else -%}
        <div {{ block('widget_container_attributes') }}>
            {{- date_pattern|replace({
                '{{ year }}':  form_widget(form.year),
                '{{ month }}': form_widget(form.month),
                '{{ day }}':   form_widget(form.day),
            })|raw -}}
        </div>
    {%- endif -%}
{%- endblock date_widget -%}
 */

import Input from 'index';
import Widget from '../index';
import ContainerAttributes from '../../attributes/container';

export default class DateTime extends Component {
    render() {
        return widget == 'single_text'
            ? <Input {...this.props} />
            : <article {...ContainerAttributes.call(this.props)}>
                    <Widget {...this.props.children.year} />
                    <Widget {...this.props.children.month} />
                    <Widget {...this.props.children.day} />
            </article>
    }
}
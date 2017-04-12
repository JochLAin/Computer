'use strict';

import React, { Component } from 'react';

/**
{%- block datetime_widget -%}
    {% if widget == 'single_text' %}
        {{- block('form_widget_simple') -}}
    {%- else -%}
        <div {{ block('widget_container_attributes') }}>
            {{- form_errors(form.date) -}}
            {{- form_errors(form.time) -}}
            {{- form_widget(form.date) -}}
            {{- form_widget(form.time) -}}
        </div>
    {%- endif -%}
{%- endblock datetime_widget -%}
 */

import ContainerAttributes from '../../../utils/attributes/container';
import Widget, { get } from '../../../widget';
import Errors from '../../../errors';

export default class DateTime extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = get('text');
            return <Input {...this.props} />
        }

        return <article {...ContainerAttributes.call(this.props)}>
                <Errors {...this.props.children.date} />
                <Errors {...this.props.children.time} />
                <Widget {...this.props.children.date} />
                <Widget {...this.props.children.time} />
        </article>
    }
}
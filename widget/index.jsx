'use strict';

import React, { Component } from 'react';

/**
{%- block form_widget -%}
    {% if compound %}
        {{- block('form_widget_compound') -}}
    {% else %}
        {{- block('form_widget_simple') -}}
    {% endif %}
{%- endblock form_widget -%}
 */

import Compound from '@components/form/widget/compound';
import Input from '@components/form/widget/input';

export default class Widget extends Component {
    render() {
        return this.props.vars.compound
            ? <Compound {...this.props} />
            : <Input {...this.props} />
    }
}
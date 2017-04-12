'use strict';

import React, { Component } from 'react';

/**
{%- block number_widget -%}
    {# type="number" doesn't work with floats #}
    {%- set type = type|default('text') -%}
    {{ block('form_widget_simple') }}
{%- endblock number_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Widget extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "text"
         })} />
    }
}
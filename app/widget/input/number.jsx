'use strict';

import React, { Component } from 'react';

/**
{%- block number_widget -%}
    {# type="number" doesn't work with floats #}
    {%- set type = type|default('text') -%}
    {{ block('form_widget_simple') }}
{%- endblock number_widget -%}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Widget extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "text"
         })} />
    }
}
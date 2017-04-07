'use strict';

import React, { Component } from 'react';

/**
{%- block number_widget -%}
    {# type="number" doesn't work with floats #}
    {%- set type = type|default('text') -%}
    {{ block('form_widget_simple') }}
{%- endblock number_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Widget extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "text"
         })} />
    }
}
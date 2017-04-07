'use strict';

import React, { Component } from 'react';

/**
{%- block integer_widget -%}
    {%- set type = type|default('number') -%}
    {{ block('form_widget_simple') }}
{%- endblock integer_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Integer extends Component {
    render() {
        return <Input {...set.call(this.props.vars, {
            type: this.props.vars.type || "number"
         })} />
    }
}
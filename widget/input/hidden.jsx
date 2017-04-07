'use strict';

import React, { Component } from 'react';

/**
{%- block hidden_widget -%}
    {%- set type = type|default('hidden') -%}
    {{ block('form_widget_simple') }}
{%- endblock hidden_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Hidden extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "hidden"
         })} />
    }
}
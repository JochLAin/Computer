'use strict';

import React, { Component } from 'react';

/**
{%- block hidden_widget -%}
    {%- set type = type|default('hidden') -%}
    {{ block('form_widget_simple') }}
{%- endblock hidden_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Hidden extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "hidden"
         })} />
    }
}
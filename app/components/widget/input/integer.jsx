'use strict';

import React, { Component } from 'react';

/**
{%- block integer_widget -%}
    {%- set type = type|default('number') -%}
    {{ block('form_widget_simple') }}
{%- endblock integer_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Integer extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "number"
         })} />
    }
}
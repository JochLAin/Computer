'use strict';

import React, { Component } from 'react';

/**
{%- block password_widget -%}
    {%- set type = type|default('password') -%}
    {{ block('form_widget_simple') }}
{%- endblock password_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Password extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "password"
         })} />
    }
}
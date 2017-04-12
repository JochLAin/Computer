'use strict';

import React, { Component } from 'react';

/**
{%- block email_widget -%}
    {%- set type = type|default('email') -%}
    {{ block('form_widget_simple') }}
{%- endblock email_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Email extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "email"
         })} />
    }
}
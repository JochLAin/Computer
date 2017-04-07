'use strict';

import React, { Component } from 'react';

/**
{%- block email_widget -%}
    {%- set type = type|default('email') -%}
    {{ block('form_widget_simple') }}
{%- endblock email_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Email extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "email"
         })} />
    }
}